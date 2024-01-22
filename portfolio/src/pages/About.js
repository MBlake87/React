import React from "react";
import html from "../images/html-5.png";
import cssIcon from "../images/css-3.png";
import javascriptIcon from "../images/javascript-1.svg";
import reactIcon from "../images/react.png";
import tailwindIcon from "../images/tailwind-css-icon.png";
import bootstrapIcon from "../images/bootstrap.png";
import gitIcon from "../images/github-mark-white.png";
import nodeIcon from "../images/nodejs-icon.svg";
import { Link } from "react-scroll";

export function About() {
  return (
    <>
      <div
        id="about"
        className="grid grid-cols-8 items-center gap-4 px-2 pb-3 xl:mx-auto xl:w-[50vw] xl:gap-14 xl:pt-[4rem]"
      >
        <div>
          <img
            className="cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 xl:max-h-[150px] "
            src={html}
            alt="html icon"
          ></img>
        </div>
        <div>
          <img
            className="cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 xl:max-h-[150px]"
            src={cssIcon}
            alt="css icon"
          ></img>
        </div>
        <div>
          <img
            className="cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 xl:max-h-[150px]"
            src={javascriptIcon}
            alt="javascript icon"
          ></img>
        </div>
        <div>
          <img
            className="cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 xl:max-h-[150px]"
            src={reactIcon}
            alt="react icon"
          ></img>
        </div>
        <div>
          <img
            className="cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 xl:max-h-[150px] xl:pr-5"
            src={tailwindIcon}
            alt="tailwind icon"
          ></img>
        </div>
        <div>
          <img
            className="cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 xl:max-h-[150px]"
            src={bootstrapIcon}
            alt="bootstrap icon"
          ></img>
        </div>
        <div>
          <Link to="https://github.com/MBlake87">
            <img
              className="cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 xl:max-h-[150px]"
              src={gitIcon}
              alt="github icon"
            ></img>
          </Link>
        </div>
        <div>
          <img
            className="cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 xl:max-h-[150px]"
            src={nodeIcon}
            alt="node icon"
          ></img>
        </div>
      </div>
      <div className="my-[2rem] flex w-full flex-col items-center py-2 text-center text-white xl:my-[4rem] xl:flex-row  xl:items-stretch xl:justify-around xl:py-[8rem]">
        <div className="my-5 w-[95%] rounded-lg xl:w-[40%]">
          <h2 className="mb-1 p-5 text-left  text-[1.5rem] text-black xl:mb-5 xl:text-[3rem]">
            My development journey...
          </h2>
          <p className="p-5 text-left text-[.75rem] text-black xl:text-[1.25rem]">
            I am a self taught FrontEnd Developer, focusing on React and
            passionate about UX/UI.{" "}
          </p>
          <p className="p-5 text-left text-[.75rem] text-black xl:text-[1.25rem]">
            I have always been interested by computers and coding but it wasnt
            until I delved into the world of Web Development that I really found
            my passion. I started an online bootcamp and never looked back!
            After completing my first course, I started creating projects and
            found that I really enjoyed using React.
          </p>
          <p className="mb-5 p-5 text-left text-[.75rem] text-black xl:text-[1.25rem]">
            I am now looking for that next adventure in my development journey.
            Lets work together, contact me below
          </p>
          <Link
            to="contact"
            smooth={true}
            className="cursor-pointer rounded-md border border-black px-3 text-[1.25rem] text-black hover:bg-text hover:text-black xl:text-[2rem]"
          >
            Contact Me
          </Link>
        </div>
        <div className="my-5 w-[95%] xl:w-[40%]">
          <h2 className="mb-5 p-5 text-left text-[1.5rem] text-black xl:text-[3rem]">
            About Me...
          </h2>
          <p className="px-5 pb-5 text-left text-[.75rem] text-black xl:text-[1.25rem]">
            I have spent the last 20 years in retail, 10 of those being in
            management. Over the years I have really focussed my style of
            management into customer experience and people management. This
            experience has given me a real appreciation for working as a team to
            deliver the requirements of the customer and ensure their experience
            is second to none!
          </p>
        </div>
      </div>
    </>
  );
}
