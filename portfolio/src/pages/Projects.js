
import { React } from "react";
import yelpcamp from "../images/yelp-camp.png"
import portfolio from "../images/portfolio.png"
import { Link } from "react-router-dom";


export function Projects() {

    return (
        <>
            <h1 id="projects" className="text-white text-[1rem] xl:text-[2rem] text-center mt-10 py-[5rem] uppercase tracking-[1rem] leading-10 xl:tracking-[4rem] underline underline-offset-8">My Current Projects</h1>
            <div className="flex flex-col  xl:flex-row xl:m-auto  items-center xl:w-[75%] py-[3rem]"><Link to="/"><img className=" px-3 xl:pr-10 xl:max-w-[40rem] hover:-translate-y-2 hover:scale-110 duration-300 cursor-pointer" src={portfolio} alt="yelp-camp" /></Link>
                <p className="text-[.75rem] pl-3  text-left pt-10 xl:pt-0 xl:text-[1.5rem] w-[100%] text-white">
                    This portfolio! Developed with React and Tailwind CSS. I will be regularly updating the content as I develop new applications.   </p></div>
            <div className="flex flex-col xl:flex-row xl:w-[75%] xl:m-auto items-center py-[3rem]"><Link to="https://yelp-camp-3ia4.onrender.com/"><img className=" px-3 xl:max-w-[40rem] xl:pr-10 hover:-translate-y-2 hover:scale-110 duration-300 cursor-pointer" src={yelpcamp} alt="yelp-camp" /></Link>
                <p className="text-[.75rem] pl-3 text-left pt-10 xl:text-[1.5rem] w-[100%] text-white">Developed as part of the Web Developer Bootcamp by Colt Steele.
                    This project is an in depth campsite booking system using Express and MongoDB.
                    It features authentication, validation, MapBox API and Image Upload to Cloudinary.   </p></div>
        </>

    )
}