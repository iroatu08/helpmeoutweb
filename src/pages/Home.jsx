import ArrowRight from "../assets/arrow-right.svg"
import Hero from "../assets/hero-img.png"
import FeatureOne from "../assets/simple.svg"
import FeatureTwo from "../assets/easy.svg"
import FeatureThree from "../assets/revisit.svg"
import VideoRepo from "../assets/video.svg"
import One from "../assets/one.svg"
import Two from "../assets/two.svg"
import Three from "../assets/three.svg"
import Rec from "../assets/rec.svg"


const works = [
  {
    id: 0,
    img:One,
    title: '   Record Screen',
    desc: 'Click the &quot;Start Recording&quot; button in our extension. choose which part of your screen to capture and who you want to send it to.'
  },
  {
    id: 1,
    img:Two,
    title: 'Share Your Recording',
    desc: ' We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.'
  },
    {
    id: 2,
    img:Three,
    title: 'Learn Effortlessly',
    desc: ' Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.'
  }
] 


const Home = () => {
  return (
   <>
     <div className="  lg:flex px-[20px] md:px[50px] lg:px-[70px] xl:px-[100px] min-h-[80vh] items-center">
        <div className=" w-full lg:w-1/2 pt-10">
          <h1 className=" font-sora font-bold text-[32px] lg:text-[45px] xl:text-[65px]">
            Show Them <br /> Don’t Just Tell
          </h1>
          <p className=" font-inter font-normal text-base mt-6 w-full xl:w-[80%]">
            Help your friends and loved ones by creating and sending videos on
            how to get things done on a website.
          </p>

          <a href="https://drive.google.com/file/d/1qev3AM6QVdKDZBr7JzzscF78QLM5625R/view?usp=sharing" target="_blank" rel="noreferrer" download >
          <button className=" bg-[#120B48] py-5 px-6 flex text-white rounded-lg gap-2 mt-10">
            <p>Install HelpMeOut</p>
            <img src={ArrowRight}/>
          </button>
          </a>
        
        </div>

        <div className=" w-full lg:w-1/2 mt-12 lg:mt-0">
          <img src={Hero} />
        </div>
      </div>

      <div className=" bg-slate-200 py-12">
        <div className=" bg-white min-h-[80%] ">
          <div className=" py-16">
            <h3 className=" font-sora font-bold text-[40px] text-center">
              Features
            </h3>
            <p className=" font-workSans text-center">
              Key Highlights of Our Extension
            </p>
          </div>

          <div className=" md:flex items-center gap-5 px-[20px] md:px[50px] lg:px-[70px] xl:px-[100px] pb-16">
            <div className=" flex flex-col gap-8 w-full md:w-1/2">
              <div className=" flex gap-6">
                <img className=" flex-1 h-12 w-12" src={FeatureOne}/>
                <div>
                  <p className=" font-inter font-semibold pb-2">
                    Simple Screen Recording
                  </p>
                  <p className=" font-workSans">
                    Effortless screen recording for everyone. Record with ease,
                    no tech expertise required.
                  </p>
                </div>
              </div>

              <div className=" flex gap-6">
                <img className=" flex-1 h-12 w-12" src={FeatureTwo} />
                <div>
                  <p className=" font-inter font-semibold pb-2">
                    Easy-to-Share URL
                  </p>
                  <p className=" font-workSans">
                    Share your recordings instantly with a single link. No
                    attachments, no downloads.
                  </p>
                </div>
              </div>

              <div className=" flex gap-6">
                <img className=" flex-1 h-12 w-12" src={FeatureThree} />
                <div>
                  <p className=" font-inter font-semibold pb-2">
                    Revisit Recordings
                  </p>
                  <p className=" font-workSans">
                    Access and review your past content effortlessly. Your
                    recordings, always at your fingertips.
                  </p>
                </div>
              </div>
            </div>

            <div className=" flex items-center w-full md:w-1/2 mt-12 lg:mt-0">
              <img className=" w-full" src={VideoRepo}/>
            </div>
          </div>
        </div>
      </div>

      <div className="px-[20px] md:px[50px] lg:px-[70px] xl:px-[100px] pb-20">
        <h3 className=" font-sora font-bold text-[40px] text-center pt-16 pb-8">
          How it Works
        </h3>

        <div className=" flex flex-col md:flex-row gap-7 justify-between items-center">
      {
        works.map((work,i) => (
          <>
          
          
          <div key={i} className=" w-full md:w-[358px] flex flex-col items-center">
         <img src={work.img} className="w-[32px]" alt="" />
            <p className=" text-center font-inter font-semibold text-2xl py-6">
         {work.title}
            </p>
            <p className=" text-center leading-8 text-[#616163]">
             {work.desc}
            </p>
            <img className=" pt-6" src={Rec}/>
          </div>
          </>
        ))
      }


          {/* <div className="w-full md:w-[358px]">
          <img src={Two} className="w-[28px]" alt="" />
            <p className=" text-center font-inter font-semibold text-2xl py-6">
              Share Your Recording
            </p>
            <p className=" text-center leading-8 text-[#616163]">
              We generate a shareable link for your video. Simply send it to
              your audience via email or copy the link to send via any platform.
            </p>
            <img className=" pt-6" src={Rec}/>
          </div> */}

          {/* <div className=" w-full md:w-[358px]">
          <img src={Three} className="w-[28px]" alt="" />
            <p className=" text-center font-inter font-semibold text-2xl py-6">
              Learn Effortlessly
            </p>
            <p className=" text-center leading-8 text-[#616163]">
              Recipients can access your video effortlessly through the provided
              link, with our user-friendly interface suitable for everyone.
            </p>
            <img className=" pt-6" src={Rec}/>
          </div> */}
        </div>
      </div>
   </>
  )
}

export default Home