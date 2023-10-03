import { Link } from "react-router-dom"
import Logo from "../assets/logo.svg"


const Header = () => {
  return (
    <div className=" flex font-medium justify-between items-center px-[20px] md:px[50px] lg:px-[70px] xl:px-[100px] py-7">
    <Link to="/">
    <img
      className="relative cursor-pointer"
      src={Logo}
      alt="Help me out logo"
    />
    </Link>
  

    <div className=" hidden md:flex gap-10 ">
      <p className=" ">Features</p>
      <p>How It Works</p>
    </div>

    <div className=" hidden md:block">
      <button>
        <Link to="/signup">
          <p className=" py-4 px-10"> Get Started</p>
        </Link>
      </button>
    </div>
  </div>
  )
}

export default Header