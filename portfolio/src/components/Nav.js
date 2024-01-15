import logo from "../images/abstract-shape.png";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

export function Nav() {
  const [click, setClick] = useState(true);

  const handleClick = () => {
    setClick(!click);
  };
  return (
    <nav className="sticky top-0 z-50 flex flex-col justify-start md:flex-row md:justify-between">
      <div className="flex min-w-fit items-center bg-gray-700 text-[#c7ccdb]">
        <img className="h-12 pl-3" src={logo} alt="logo" />
        <p className="ml-2 font-Roboto text-[2rem] font-semibold tracking-[.5rem] duration-500 hover:text-[#93b7be] md:hover:tracking-[1.5rem]">
          Mark Blake
        </p>
      </div>
      <div
        className={`w-[100%] bg-gray-700 md:flex md:items-center ${
          click ? "hidden" : "flex"
        }`}
      >
        <ul className="flex w-[100%] flex-col border-b text-[#c7ccdb] md:flex md:flex-row md:justify-end">
          <li className="py-5 text-center text-[1.3rem] duration-500 hover:text-[#93b7be] hover:underline md:px-5">
            <Link
              className="cursor-pointer"
              onClick={handleClick}
              to="home"
              smooth={true}
              duration={1000}
            >
              Home!
            </Link>
          </li>
          <li className="py-5 text-center text-[1.3rem] duration-500 hover:text-[#93b7be] hover:underline md:px-5">
            <Link
              className="cursor-pointer"
              onClick={handleClick}
              to="about"
              smooth={true}
              duration={1000}
            >
              About
            </Link>
          </li>
          <li className="py-5 text-center text-[1.3rem] duration-500 hover:text-[#93b7be] hover:underline md:px-5">
            <Link
              className="cursor-pointer"
              onClick={handleClick}
              to="projects"
              smooth={true}
              duration={1000}
            >
              Projects
            </Link>
          </li>
          <li className="py-5 text-center text-[1.3rem] duration-500 hover:text-[#93b7be] hover:underline md:px-5">
            <Link
              className="cursor-pointer"
              onClick={handleClick}
              to="contact"
              smooth={true}
              duration={1000}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div
        className="absolute right-3 top-3 mr-5 md:hidden"
        onClick={handleClick}
      >
        {click ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>
    </nav>
  );
}
