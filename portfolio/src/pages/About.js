
import React from "react";
import html from "../images/html-5.png"
import cssIcon from "../images/css-3.png"
import javascriptIcon from "../images/javascript-1.svg"
import reactIcon from "../images/react.png"
import tailwindIcon from "../images/tailwind-css-icon.png"
import bootstrapIcon from "../images/bootstrap.png"
import gitIcon from "../images/github-mark-white.png"
import nodeIcon from "../images/nodejs-icon.svg"
import { Link } from "react-scroll";


export function About() {
    return (
        <>

            <div id="about" className="grid grid-cols-8 items-center gap-4 px-2 xl:w-[50vw] xl:gap-12 xl:mx-auto xl:pt-[4rem] border-b-2 pb-5">
                <div><img className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer xl:max-h-[150px] " src={html} alt="html icon"></img></div>
                <div><img className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer xl:max-h-[150px]" src={cssIcon} alt="css icon"></img></div>
                <div><img className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer xl:max-h-[150px]" src={javascriptIcon} alt="javascript icon"></img></div>
                <div><img className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer xl:max-h-[150px]" src={reactIcon} alt="react icon"></img></div>
                <div><img className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer xl:max-h-[150px] xl:pr-5" src={tailwindIcon} alt="tailwind icon"></img></div>
                <div><img className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer xl:max-h-[150px]" src={bootstrapIcon} alt="bootstrap icon"></img></div>
                <div><Link to="https://github.com/MBlake87"><img className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer xl:max-h-[150px]" src={gitIcon} alt="github icon"></img></Link></div>
                <div><img className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer xl:max-h-[150px]" src={nodeIcon} alt="node icon"></img></div>
            </div>
            <div className="w-full flex flex-col items-center xl:items-stretch xl:flex-row xl:justify-around text-white text-center my-[2rem] xl:my-[4rem]  py-2 xl:py-[8rem] border-b-2">
                <div className="w-[95%] xl:w-[40%] bg-slate-700 rounded-lg my-5"><h2 className="text-[1.5rem] xl:text-[3rem] text-left p-5 mb-1 xl:mb-5">My development journey...</h2>
                    <p className="text-left text-[.75rem] xl:text-[1.25rem] p-5">I am a self taught FrontEnd Developer, focusing on React and passionate about UX/UI.  </p>
                    <p className="text-left text-[.75rem]xl:text-[1.25rem] p-5">I have always been interested by computers and coding but it wasnt until I delved into the world of Web Development that I really found my passion.
                        I started an online bootcamp and never looked back! After completing my first course, I started creating projects and found that I really enjoyed using React.</p>
                    <p className="text-left text-[.75rem] xl:text-[1.25rem] p-5">I am now looking for that next adventure in my development journey. Lets work together, contact me below</p>
                    <Link to="contact" smooth={true} className="cursor-pointer text-[1.25rem] xl:text-[2rem] border rounded-md px-3 hover:bg-white hover:text-slate-700">Contact Me</Link></div>
                <div className="w-[95%] xl:w-[40%] my-5 bg-[#44535e] rounded-lg"><h2 className="text-[1.5rem] xl:text-[3rem] text-left p-5 mb-5">About Me...</h2>
                    <p className="text-left px-5 xl:text-[1.25rem]text-[.75rem] pb-5" >I have spent the last 20 years in retail, 10 of those being in management. Over the years I have really focussed my style of management into customer experience and people management. This experience has given me a real appreciation for working as a team to deliver the requirements of the customer and ensure their experience is second to none!</p></div>
            </div>

        </>
    )
}