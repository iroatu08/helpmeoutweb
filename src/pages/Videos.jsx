import Logo from '../assets/Logo.svg'
import Profile from '../assets/Profile.svg'
import Search from "../assets/search.svg"

const Videos = () => {
  return (
    // <div className="w-full h-screen overflow-y-hidden">
    //   <div className="w-full h-full mb-8 flex flex-col items-center justify-between">
    //     <div className="w-full px-[4em] py-9 flex items-center justify-between">
    //  <img src="" alt="" />
    //       <button className="px-3 flex items-center justify-center gap-2">Hello</button>
    //     </div>
    //     <div className="w-full px-[4em] py-5 flex items-start justify-between">
    //       <div className="w-auto flex flex-col items-start justify-start">
    //         <h1 className="text-dark-100 ppB text-[2em] ">Hello, John Mark</h1>
    //         <p className="text-white-400 text-[12px] ppReg ">
    //           Here are your recorded videos
    //         </p>
    //       </div>
    //       <div className="w-full max-w-[250px] bg-white-300 px-4 flex items-center justify-start rounded-lg">
    //        <img src={Logo} alt=""  />
    //         <input
    //           type="text"
    //           className="w-full py-3 bg-transparent outline-none border-none px-3 text-[10px] text-white-400 font-ppReg"
    //           placeholder="Search for a video"
    //         />
    //       </div>
    //     </div>
    //     <br />
    //     <div className="w-full px-[4em] min-h-[15em] mt-9 flex items-start justify-start flex-col gap-4 mb-5 overflow-y-scroll">
    //       <p className="text-dark-200 font-ppReg text-[12px] ">Recent files</p>
    //       <div className="w-full flex items-center justify-start flex-wrap gap-7">
           
    //       </div>
    //       <br />
    
    //     </div>
    //   </div>
    // </div>

    <>
    <div className='flex flex-col items-center px-[100px] py-[40px] gap-[40px]'>
    <div className='header flex items-center justify-between w-full'>
    <img src={Logo} alt="" />
    <img src={Profile} alt="" />

    </div>

    <div className='flex justify-between items-center w-full'>
    <div className='heading flex flex-col items-start gap-[8px]'>
        <h1 className='sora text-[32px] font-bold text-[#141414]'>Hello, John Mark </h1>
        <p className='worksans text-[#141414]/70 font-[400]'>Here are your recorded videos</p>

    </div>

    <div className='search flex items-center gap-[16px] rounded-[12px] p-[12px] w-[350px]  border bordr-[#E7E7ED] bg-[#f4f4f7]'>
        <img src={Search} alt="" />
        <input className='outline-none bg-[#f4f4f7] placeholder-[#C3C3C3] worksans text-[14px] w-full' type="text" placeholder='Search for a particular video' />

    </div>
    </div>

    </div>
    </>
  )
}

export default Videos