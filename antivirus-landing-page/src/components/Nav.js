import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../images/logo.svg";
import { Link } from "react-scroll";

export function Nav() {
  const [click, setClick] = useState(true);

  const handleClick = () => {
    setClick(!click);
  };
  return (
    <nav className="flex flex-col justify-start md:justify-between md:flex-row sticky top-0 z-50">
      <div className="bg-gray-100 text-[#c7ccdb] flex min-w-fit items-center">
        <img className="h-12 pl-3 my-2" src={Logo} alt="logo" />
        <p className="font-victor text-black ml-2 text-[2rem] font-bold">
          AntiWare
        </p>
      </div>
      <div
        className={`bg-gray-100 w-[100%] md:flex md:items-center ${
          click ? "hidden" : "flex"
        }`}
      >
        <ul className="flex w-[100%] text-[#c7ccdb] flex-col md:flex md:flex-row md:justify-end border-b">
          <li className="py-5 md:px-5 text-center text-[1.3rem] hover:text-[#93b7be] duration-500 hover:underline">
            <Link
              className="cursor-pointer font-victor  text-black"
              onClick={handleClick}
              to="home"
              offset={-1000}
              smooth={true}
              duration={1000}
            >
              Home
            </Link>
          </li>
          <li className="py-5 md:px-5 text-center text-[1.3rem] hover:text-[#93b7be] duration-500 hover:underline">
            <Link
              className="cursor-pointer font-victor  text-black"
              onClick={handleClick}
              to="features"
              offset={-400}
              smooth={true}
              duration={1000}
            >
              Features
            </Link>
          </li>
          <li className="py-5 md:px-5 text-center text-[1.3rem] hover:text-[#93b7be] duration-500 hover:underline">
            <Link
              className="cursor-pointer font-victor  text-black"
              onClick={handleClick}
              to="protect"
              offset={-400}
              smooth={true}
              duration={1000}
            >
              Protection
            </Link>
          </li>
          <li className="py-5 md:px-5 text-center text-[1.3rem] hover:text-[#93b7be] duration-500 hover:underline">
            <Link
              className="cursor-pointer font-victor  text-black"
              onClick={handleClick}
              to="pricing"
              smooth={true}
              duration={1000}
            >
              Pricing Plans
            </Link>
          </li>
        </ul>
      </div>
      <div
        className="mr-5 absolute top-4 right-0 md:hidden"
        onClick={handleClick}
      >
        {click ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>
    </nav>
  );
}
