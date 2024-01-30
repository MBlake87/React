import { React } from "react";
import yelpcamp from "../images/yelp-camp.png";
import portfolio from "../images/portfolio.png";
import pokedex from "../images/pokedex.png";

export function Projects() {
  return (
    <>
      <h1
        id="projects"
        className=" pb-[5rem] text-center text-[1rem] uppercase leading-10 tracking-[1rem] text-text xl:text-[2rem] xl:tracking-[3rem]"
      >
        My Current Projects
      </h1>
      <div className="flex flex-col justify-center gap-5 xl:flex-row">
        <div class="mx-5 rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800 xl:max-w-[30%]">
          <a href="/">
            <img
              class="aspect-auto w-full rounded-t-lg xl:h-[360px]"
              src={portfolio}
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="/">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-text">
                Portfolio
              </h5>
            </a>
            <p class="mb-3 font-normal text-text">
              This portfolio. Developed with React and Tailwind CSS. I will be
              regularly updating the content as I develop new applications.
            </p>
            <a
              href="/"
              class="mt-5 inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              See More
              <svg
                class="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>

        <div class="mx-5 rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800 xl:max-w-[30%]">
          <a href="https://yelp-camp-3ia4.onrender.com/">
            <img
              class="aspect-auto w-full rounded-t-lg xl:h-[360px]"
              src={yelpcamp}
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="https://yelp-camp-3ia4.onrender.com/">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-text">
                YelpCamp
              </h5>
            </a>
            <p class="mb-3 font-normal text-text">
              Developed as part of the Web Developer Bootcamp by Colt Steele.
              This project is an in depth campsite booking system using Express
              and MongoDB. It features authentication, validation, MapBox API
              and Image Upload to Cloudinary.
            </p>
            <a
              href="https://yelp-camp-3ia4.onrender.com/"
              class="mt-5 inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              See More
              <svg
                class="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
        <div class="mx-5 rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800 xl:max-w-[30%]">
          <a href="https://marks-pokedex-api.netlify.app/">
            <img
              class="aspect-auto w-full rounded-t-lg xl:h-[360px]"
              src={pokedex}
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="https://marks-pokedex-api.netlify.app/">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-text">
                PokeDex
              </h5>
            </a>
            <p class="mb-3 font-normal text-text">
              I loved Pokemon as a child and this API let me relive some
              memories! My first venture into the world of API's, developed with
              React, Tailwind and the PokeAPI
            </p>
            <a
              href="https://marks-pokedex-api.netlify.app/"
              class="mt-5 inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              See More
              <svg
                class="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
