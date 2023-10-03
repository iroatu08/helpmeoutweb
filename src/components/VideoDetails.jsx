import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";

const VideoDetails = () => {
  const { sessionId } = useParams();
  const [videoDetail, setVideoDetail] = useState({});
  const [loading, setLoading] = useState(true);

  const options = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    const getVideoDetails = async () => {
      try {
        const url = `https://recorder-service.onrender.com/api/videos/${sessionId}/details`
        // const path = ``
        const response = await axios.get(url, options);
        

        if (response.status === 200) {
          setVideoDetail(response.data.data);
          console.log(response)
        } else {
          console.error("Error fetching video details:", response.status);
        }
      } catch (error) {
        console.error("Error fetching video details:", error);
      } finally {
        setLoading(false);
      }
    };
    getVideoDetails();
  }, [sessionId]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : videoDetail ? (
        <video
        src={videoDetail.videoUrl}
        autoPlay
        muted
        loop={true}
        className="border border-[#E7E7ED] rounded-[12px]"
      ></video>
      ) : (
        <p>Video details not found</p>
      )}
    </div>
  );
};

export default VideoDetails;
