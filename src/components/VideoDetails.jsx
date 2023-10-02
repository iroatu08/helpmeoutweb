import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";

const VideoDetails = () => {
  const {id } = useParams();
  const [videoDetail, setVideoDetail] = useState("");
  const [loading, setLoading] = useState(true);


  const options = {
    headers: {
        "Content-Type": "video/webm",
        "Access-Control-Allow-Origin": "*",
       
      },
  };

  useEffect(() => {
    const getVideoDetails = async () => {
      try {
        const url = import.meta.env.VITE_BASE_URL;
        const path = `/videos/${id}`;
        const response = await axios.get(url + path, options);

        if (response.status === 200) {

            setVideoDetail(response.data);
            console.log(response.data);
            // console.log(response.data.videoUrl);
            // console.log(videoDetail);
        } else {
          console.error("Error fetching video:", response.status);
        }
      } catch (error) {
        console.error("Error fetching video:", error);
      } finally {
        setLoading(false);
      }
    };
    getVideoDetails();

  }, [id, videoDetail]);

  return (
    
    <div>
      {loading ? (
        <Loader />
      ) : videoDetail ? (
        <video
          autoPlay
          muted
          src={videoDetail} 
          loop={true}
         
          className="border border-[#E7E7ED]  rounded-[12px]"
        >
        </video>
      ) : (
        <p>Video not found</p>
      )}
    </div>
  );
};

export default VideoDetails;
