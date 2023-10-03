import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";

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
       <>
        <div className=" md:flex px-[20px] md:px[50px] lg:px-[70px] xl:px-[100px] min-h-[80dvh] py-10">
        <div className=" w-full md:w-1/2">
          <p className=" font-sora font-bold text-4xl">Your video is ready</p>

          <div className="py-16">
            <p className=" font-medium pb-[12px] text-[#727272]">{videoDetail.sessionId}</p>
            <input
              type="text"
              
              className=" w-full outline-none rounded-xl font-sora text-2xl font-semibold"
            />
          </div>

          <div className=" relative w-full">
            <input
              type="email"
              

              placeholder="Enter email of receiver"
              className=" w-full bg-[#B6B3C633] outline-none pl-3 rounded-xl h-[68px] font-workSans font-medium relative"
            />
            <button className=" absolute bg-[#605C84] outline-none text-white px-5 py-3 rounded-lg right-[10px] top-[10px] ">
              Send
            </button>
          </div>

          <div className=" pt-16">
            <p className=" font-semibold pb-[12px] font-sora">Video URL</p>
            <div className=" relative">
              <input
                type="email"
              

                placeholder="Enter your email address"
                className=" w-full border bg-[#FAFAFA] border-[#929292] outline-none pl-3 rounded-xl h-[68px] font-workSans font-medium relative"
              />
              <button className=" absolute outline-none border border-[#120B48] text-[#120B48] px-2 py-3 rounded-lg right-[10px] top-[10px] flex items-center gap-2">
              
                Copy
              </button>
            </div>
          </div>

          <div className=" pt-10">
            <p className=" font-semibold pb-[12px] font-sora">
              Share your video
            </p>
            <div className=" flex flex-col lg:flex-row gap-3">
              <button className=" flex border border-[#0A0628] outline-none py-2 px-3 rounded-md gap-2">
                <img src="/Facebook.svg" alt="" />
                Facebook
              </button>
              <button className=" flex border border-[#0A0628] outline-none p-2 rounded-md gap-2">
                <img src="/whatsapp.svg" alt="" />
                Whatsapp
              </button>
              <button className=" flex border border-[#0A0628] outline-none p-2 rounded-md gap-2">
                <img src="/telegram.svg" alt="" />
                Telegram
              </button>
            </div>
          </div>
        </div>

        <div className=" hidden md:block h-auto w-[1px] bg-[#BBBBBB] ml-[25px] mr-[25px] lg:ml-[72px] lg:mr-[40px]"></div>

        <div className=" w-full md:w-1/2 mt-8 md:mt-0">
        <video
                                  src={videoDetail.videoUrl}
                                  autoPlay
                                  muted
                                  loop={true}
                                  className="border border-[#E7E7ED] w-full rounded-[12px]"
                                ></video>
                    

          <p className=" font-sora text-2xl font-semibold pt-12 pb-3">
            Transcript
          </p>

          <select className="border border-[#CFCFCF] text-[#CFCFCF] outline-none w-32 px-2 py-1 rounded-sm">
            <option value="english">English</option>
            <option value="yoruba">Yoruba</option>
            <option value="hausa">Hausa</option>
            <option value="igbo">Igbo</option>
          </select>

          <div className=" h-48 overflow-y-scroll mt-8 pr-5">
            <div className=" flex gap-5 pb-4">
              <p className=" flex-1">0.01</p>
              <p>
                First step. Open Facebook on your desktop or mobile device and
                locate &quot;Marketplace&quot; in the left-hand menu or at the
                top of the
              </p>
            </div>
            <div className=" flex gap-5 pb-4">
              <p className=" flex-1">0.01</p>
              <p>
                First step. Open Facebook on your desktop or mobile device and
                locate &quot;Marketplace&quot; in the left-hand menu or at the
                top of the
              </p>
            </div>
            <div className=" flex gap-5 pb-4">
              <p className=" flex-1">0.01</p>
              <p>
                First step. Open Facebook on your desktop or mobile device and
                locate &quot;Marketplace&quot; in the left-hand menu or at the
                top of the
              </p>
            </div>
            <div className=" flex gap-5 pb-4">
              <p className=" flex-1">0.01</p>
              <p>
                First step. Open Facebook on your desktop or mobile device and
                locate &quot;Marketplace&quot; in the left-hand menu or at the
                top of the
              </p>
            </div>
            <div className=" flex gap-5 pb-4">
              <p className=" flex-1">0.01</p>
              <p>
                First step. Open Facebook on your desktop or mobile device and
                locate &quot;Marketplace&quot; in the left-hand menu or at the
                top of the
              </p>
            </div>
            <div className=" flex gap-5 pb-4">
              <p className=" flex-1">0.01</p>
              <p>
                First step. Open Facebook on your desktop or mobile device and
                locate &quot;Marketplace&quot; in the left-hand menu or at the
                top of the
              </p>
            </div>
            <div className=" flex gap-5 pb-4">
              <p className=" flex-1">0.01</p>
              <p>
                First step. Open Facebook on your desktop or mobile device and
                locate &quot;Marketplace&quot; in the left-hand menu or at the
                top of the
              </p>
            </div>
            <div className=" flex gap-5 pb-4">
              <p className=" flex-1">0.01</p>
              <p>
                First step. Open Facebook on your desktop or mobile device and
                locate &quot;Marketplace&quot; in the left-hand menu or at the
                top of the
              </p>
            </div>
            <div className=" flex gap-5 pb-4">
              <p className=" flex-1">0.01</p>
              <p>
                First step. Open Facebook on your desktop or mobile device and
                locate &quot;Marketplace&quot; in the left-hand menu or at the
                top of the
              </p>
            </div>
            <div className=" flex gap-5 pb-4">
              <p className=" flex-1">0.01</p>
              <p>
                First step. Open Facebook on your desktop or mobile device and
                locate &quot;Marketplace&quot; in the left-hand menu or at the
                top of the
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="px-[347px] py-[48px] bg-[#f4f6f8] ">
        <div className="grid gap-4 font-sora font-bold text-base text-center md:mx-auto md:py-8 xl:text-[2.4rem]">
          <p className=" text-[#141414] sora text-[24px] font-[600]">
            To ensure the availability and privacy of your video, we recommend
            saving it to your account.
          </p>

          <button className=" px-[32px] py-[16px] mx-auto bg-[#120B48] rounded-[1.2rem] work-sans font-normal text-white xl:text-sm">
            Save video
          </button>

          <div className="flex justify-center gap-2">
            <p className="text-[#7E7E7E]">Don&apos;t have an account?</p>
            <Link href="/signup" className="underline">
              Create account
            </Link>
          </div>
        </div>
      </section>
       
       </>
      ) : (
        <p>Video details not found</p>
      )}
    </div>
  );
};

export default VideoDetails;
