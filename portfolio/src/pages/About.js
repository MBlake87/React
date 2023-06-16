
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
import { Helmet } from "react-helmet";

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

            <div className="bg-gradient-to-b from-gray-700 via-gray-900 to-black min-h-screen w-full">
                <Helmet><title>Mark Blake | About My Skills</title></Helmet>
                <div className="grid grid-cols-4 items-center gap-4 pt-[6rem] px-2 xl:w-[50vw] xl:gap-6 xl:mx-auto xl:pt-[4rem]">
                    <div><img className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer xl:max-h-[150px] " src={html} alt="html icon"></img></div>
                    <div><img className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer xl:max-h-[150px]" src={cssIcon} alt="css icon"></img></div>
                    <div><img className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer xl:max-h-[150px]" src={javascriptIcon} alt="javascript icon"></img></div>
                    <div><img className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer xl:max-h-[150px]" src={reactIcon} alt="react icon"></img></div>
                    <div className="col-span-full text-center text-white font-bold text-[5rem] tracking-[3rem] font-Roboto xl:py-[2rem] xl:text-[12rem]"><h1>Skills</h1></div>
                    <div><img className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer xl:max-h-[150px] xl:pr-5" src={tailwindIcon} alt="tailwind icon"></img></div>
                    <div><img className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer xl:max-h-[150px]" src={bootstrapIcon} alt="bootstrap icon"></img></div>
                    <div><Link to="https://github.com/MBlake87"><img className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer xl:max-h-[150px]" src={gitIcon} alt="github icon"></img></Link></div>
                    <div><img className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer xl:max-h-[150px]" src={nodeIcon} alt="node icon"></img></div>
                </div>

            </div>
        </>
    )
}