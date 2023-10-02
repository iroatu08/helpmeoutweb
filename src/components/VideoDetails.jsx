import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";

const VideoDetails = () => {

    const options = {
        headers: {
            "Content-Type": "video/webm",
            "Access-Control-Allow-Origin": "*",
          
          },
      };


    const { id } = useParams();

    const [videoDetail, setVideoDetail] = useState({});
    const [loading, setLoading] = useState();

    useEffect(() => {
        const getVideoDetails = async () =>{
            setLoading(true);
            try {
                const url = import.meta.env.VITE_BASE_URL;
                const path = `/videos/${id}`
                const response = await axios.get(url + path, options);
                console.log('Response:', response); 
                const data = response.data;
                setVideoDetail(data)
                console.log(data);
              }catch (error) {
                console.error("Error fetching videos:", error);
               
              }finally{
                setLoading(false);
           
    
            }
            
        }
        getVideoDetails()
    }, []);

    

  return (
    <div>
        {
            loading ? (<Loader/>): videoDetail ? (
                <video
                src={videoDetail.videoUrl}
                autoPlay
                muted
                loop={true}
                className="border border-[#E7E7ED] w-full rounded-[12px]"
              ></video>
            ) : (<p>Video not found</p>)
        }
    </div>
  )
}

export default VideoDetails