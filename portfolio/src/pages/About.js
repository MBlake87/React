
import React from "react";
import html from "../images/html-5.png"
import cssIcon from "../images/css-3.png"
import javascriptIcon from "../images/javascript-1.svg"
import reactIcon from "../images/react.png"
import tailwindIcon from "../images/tailwind-css-icon.png"
import bootstrapIcon from "../images/bootstrap.png"
import gitIcon from "../images/github-mark-white.png"
import nodeIcon from "../images/nodejs-icon.svg"
import { Link } from "react-router-dom";
import { enableBodyScroll, disableBodyScroll } from "body-scroll-lock";
import { useEffect } from "react";

export function About() {
    const handleWindowSizeChange = () => {
        if (window.screen.width < 768) {
            enableBodyScroll(document)
        } else {
            disableBodyScroll(document)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        if (window.screen.width > 768) { disableBodyScroll(document) } else { enableBodyScroll(document) }
        return () => {

            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);
    return (
        <>

            <div className="bg-gradient-to-b from-gray-700 via-gray-900 to-black h-screen w-full">
                <div className="grid grid-cols-4 items-center gap-4 pt-[6rem] px-2 xl:w-[50vw] xl:gap-6 xl:mx-auto xl:pt-[8rem]">
                    <div><img className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer xl:max-h-[200px] " src={html} alt="html icon"></img></div>
                    <div><img className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer xl:max-h-[200px]" src={cssIcon} alt="css icon"></img></div>
                    <div><img className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer xl:max-h-[200px]" src={javascriptIcon} alt="javascript icon"></img></div>
                    <div><img className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer xl:max-h-[200px]" src={reactIcon} alt="react icon"></img></div>
                    <div className="col-span-full text-center text-white font-bold text-[5rem] tracking-wider font-Roboto xl:py-[3rem] xl:text-[12rem]"><h1>Skills</h1></div>
                    <div><img className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer xl:max-h-[200px] xl:pr-5" src={tailwindIcon} alt="tailwind icon"></img></div>
                    <div><img className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer xl:max-h-[200px]" src={bootstrapIcon} alt="bootstrap icon"></img></div>
                    <div><Link to="https://github.com/MBlake87"><img className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer xl:max-h-[200px]" src={gitIcon} alt="github icon"></img></Link></div>
                    <div><img className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer xl:max-h-[200px]" src={nodeIcon} alt="node icon"></img></div>
                </div>

            </div>
        </>
    )
}