import Facebook from "../assets/Facebook svg.svg"
import Google from "../assets/Google svg.svg"
import Logo from "../assets/logo.svg"
import { Link } from "react-router-dom"


const Signup = () => {
  return (
    <div className="px-[20px] md:px[50px] lg:px-[70px] xl:px-[100px] py-14 ">
      <div>
        <Link to="/">
        <img
          className="relative cursor-pointer pb-10"
          src={Logo}
          alt="Help me out logo"
       
        />
        </Link>
       
      </div>

      <div className=" w-full md:w-[475px] mx-auto">
        <h1 className=" font-inter text-center text-[32px] font-bold pb-[12px]">
          Log in or Sign up
        </h1>
        <p className="text-center w-[321px] text-[#434343] text-[14px] leading-[21px] mx-auto font-inter pb-[32px]">
          Join millions of others in sharing successful moves on{" "}
          <span className=" worksans">HelpMeOut.</span>
        </p>

        <button
        
          className="flex items-center justify-center border border-[#141414] font-inter font-medium py-2 text-black h-[48px] rounded-xl w-full "
        >
          <img src={Google} />
          <p className=" pl-3">Continue with Google</p>
        </button>

        <button
         
          className=" flex items-center justify-center border border-[#141414] font-inter font-medium py-2 text-black h-[48px] rounded-xl w-full mt-[24px]"
        >
          <img src={Facebook} />
          <p className=" pl-3">Continue with Google</p>
        </button>

        <div className=" flex items-center px-4 py-[32px]">
          <div className=" h-[1px] w-full bg-[#B9C2C8]"></div>
          <p className=" text-[#B9C2C8] mx-2">or</p>
          <div className=" h-[1px] w-full bg-[#B9C2C8]"></div>
        </div>

        <div className="">
          <h2 className=" font-medium pb-[12px]">Email</h2>
          <input
            type="email"
           
            placeholder="Enter your email address"
            className=" w-full border border-[#626262] outline-none pl-3 rounded-xl h-[51px] font-workSans font-medium"
          />
        </div>
        <div className="pt-[16px]">
          <h2 className=" font-medium pb-[12px]">Password</h2>
          <input
            type="password"
           
            placeholder="Enter your password"
            className=" w-full border border-[#626262] outline-none pl-3 rounded-xl h-[51px] font-workSans font-medium"
          />
        </div>

        <button
       
          type="submit"
          className=" bg-[#120B48] text-white rounded-lg w-full py-3 h-[53px] mt-8"
        
        >
          Sign Up
        </button>
      </div>
    </div>
  )
}

export default Signup