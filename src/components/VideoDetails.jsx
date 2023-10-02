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
        const url = `${import.meta.env.VITE_BASE_URL}/videos/${sessionId}/details`;
        const response = await axios.get(url, options);

        if (response.status === 200) {
          setVideoDetail(response.data);
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
        <div>
          <h1>Video Details</h1>
          <p>Session ID: {videoDetail.sessionId}</p>
          <p>Date Created: {videoDetail.dateCreated}</p>
          <p>MIME Type: {videoDetail.mimeType}</p>
          <p>Transcriptions: {videoDetail.transcriptions || "Not available"}</p>
          <p>File Size: {videoDetail.fileSize || "Not available"}</p>
          <p>Video URL: <a href={videoDetail.videoUrl}>{videoDetail.videoUrl}</a></p>
        </div>
      ) : (
        <p>Video details not found</p>
      )}
    </div>
  );
};

export default VideoDetails;
