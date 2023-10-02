import { useState, useEffect } from "react";

import Logo from "../assets/Logo.svg";
import Profile from "../assets/profile.svg";
import Search from "../assets/search.svg";
import VideoLink from "../assets/link.svg";
import More from "../assets/more.svg";
import Loader from "../components/Loader";
import axios from 'axios'
import moment from "moment"
import { Link } from "react-router-dom";

const Recordings = () => {
    const [videos, setVideos] = useState([]);
const [loading, setLoading] = useState();
const [error, setError] = useState(null)

const options = {
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
 
      },
  };


useEffect(() => {
    const getVideos = async () =>{
        setLoading(true);
        try {
            const url = import.meta.env.VITE_BASE_URL;
            const path = '/videos'
            const response = await axios.get(url + path, options);
            console.log('Response:', response); 
            const data = response.data;
  
            if (Array.isArray(data.data)) {
                setVideos(data.data)
                console.log(data.data);
           
            } else {
                setError("No videos found.");
            }
            console.log(data);
          }catch (error) {
            console.error("Error fetching videos:", error);
            setError("An error occurred while fetching videos. Check the ngrok URL and CORS settings.");
          }finally{
            setLoading(false);
            setError(null)

        }
        
    }
    getVideos()
}, []);

    return (


        <>
          <div className="flex flex-col items-center px-[100px] py-[40px] gap-[40px]">
            <div className="header flex items-center justify-between w-full">
              <img src={Logo} alt="" />
              <img src={Profile} alt="" />
            </div>
    
            <div className="flex justify-between items-center w-full">
              <div className="heading flex flex-col items-start gap-[8px]">
                <h1 className="sora text-[32px] font-bold text-[#141414]">
                  Hello, John Mark{" "}
                </h1>
                <p className="worksans text-[#141414]/70 font-[400]">
                  Here are your recorded videos
                </p>
              </div>
    
              <div className="search flex items-center gap-[16px] rounded-[12px] p-[12px] w-[350px]  border border-[#E7E7ED] bg-[#f4f4f7]">
                <img src={Search} alt="" />
                <input
                  className="outline-none bg-[#f4f4f7] placeholder-[#C3C3C3] worksans text-[14px] w-full"
                  type="text"
                  placeholder="Search for a particular video"
                />
              </div>
            </div>
          </div>
    
          <div className="h-[1px] bg-black/10" />
    
         
          <div className="flex flex-col items-start px-[100px] py-[40px] gap-[24px]">
            <h1 className="worksans text-[18px] font-[500]">Recent files</h1>
    
            {
                loading? (<Loader/>) : error ? (<p className="text-[24px]">Error: {error}</p>) : (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[64px]">
                        {
                           Array.isArray(videos) && videos.map((video, index) => (
                                <>
                                <Link to={`/videos/${video._id}`} key={index}>
                                <div key={index} className="w-[557px] border border-[#E7E7ED] px-[16px] py-[16px] pb-[24px] flex flex-col gap-[24px] rounded-[24px]">
                                <video
                                  src={video.videoUrl}
                                  autoPlay
                                  muted
                                  loop={true}
                                  className="border border-[#E7E7ED] w-full rounded-[12px]"
                                ></video>
                    
                                <div className="title flex flex-col items-start gap-[8px]">
                                  <div className="flex items-start justify-between w-full">
                                    <h1 className="text-[#141414] worksans text-[20px] font-[500] capitalize ">
                                     {video.sessionId}
                                    </h1>
                    
                                    <div className="video-icons flex items-center gap-[24px]">
                                      <img src={VideoLink} alt="" />
                                      <img src={More} alt="" />
                                    </div>
                                  </div>
                    
                                  <p className="date text-[#B6B3C6] worksans text-[16px] uppercase">
                                  {moment(video.dateCreated).format("MMMM Do YYYY")}
                                  </p>
                                </div>
                    
                    
                              </div>
                                </Link>
                                
                                </>
                              
                            ))
                        }
         
                  </div>
                )
            }
    
          
          </div>
        </>
      );
}

export default Recordings