
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


export function About() {
    return (
        <>

            <div id="about" className="grid grid-cols-8 items-center gap-4 px-2 xl:w-[50vw] xl:gap-12 xl:mx-auto xl:pt-[4rem]">
                <div><img className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer xl:max-h-[150px] " src={html} alt="html icon"></img></div>
                <div><img className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer xl:max-h-[150px]" src={cssIcon} alt="css icon"></img></div>
                <div><img className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer xl:max-h-[150px]" src={javascriptIcon} alt="javascript icon"></img></div>
                <div><img className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer xl:max-h-[150px]" src={reactIcon} alt="react icon"></img></div>
                <div><img className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer xl:max-h-[150px] xl:pr-5" src={tailwindIcon} alt="tailwind icon"></img></div>
                <div><img className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer xl:max-h-[150px]" src={bootstrapIcon} alt="bootstrap icon"></img></div>
                <div><Link to="https://github.com/MBlake87"><img className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer xl:max-h-[150px]" src={gitIcon} alt="github icon"></img></Link></div>
                <div><img className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer xl:max-h-[150px]" src={nodeIcon} alt="node icon"></img></div>
            </div>
            <div className="w-full text-white text-center pt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima explicabo exercitationem illo nisi, quaerat nesciunt laudantium pariatur possimus amet aliquam, dolorem provident eius temporibus consequatur aut ab molestias voluptas optio.
                Neque fugiat ipsam porro eveniet quasi, harum iste totam architecto eligendi numquam illo quo, natus, a asperiores maxime odio eos nulla accusantium ex itaque voluptatum fuga voluptates cum. Fugit, magnam?
                Quisquam dicta voluptate maiores esse. Consequuntur, quidem corrupti. Ipsam in sint aut doloribus a delectus hic distinctio ea reprehenderit assumenda quisquam adipisci eaque cum nesciunt, fuga enim officia nostrum iste!
                Deserunt eos quaerat numquam quas expedita eius eaque error incidunt pariatur voluptatibus saepe blanditiis laboriosam nulla sint ut vel molestias totam impedit ex eum dolorum, autem neque? Dolores, quos suscipit!
                Tempora eum veniam nisi. Tempore vel unde voluptate ipsum dicta aperiam voluptas minima illum quos dolore est sint soluta quaerat magni optio eaque doloribus cum, nemo ducimus repellendus assumenda? Aliquam.
                Praesentium soluta iste earum reiciendis, expedita dolor accusantium, cumque aspernatur magnam ducimus accusamus nisi. Deserunt, quod quaerat, possimus corporis, natus quas mollitia fugiat eligendi labore culpa libero aspernatur voluptatum dolor?
                Provident magni veniam facere impedit expedita aliquid ut, nam, harum cupiditate nulla dolore tempora. Quisquam, asperiores. Ad, non qui sint, temporibus tempore voluptatem excepturi deserunt iure fuga cum repellendus saepe!
                Reprehenderit similique quod sit, placeat quidem facilis quo eligendi provident molestias? Magnam tempora non beatae corrupti necessitatibus consequuntur ratione nam. Voluptatem magni quas, saepe ducimus possimus laboriosam eos placeat eum.
                Dolore nulla sapiente nostrum excepturi minus. Ullam eligendi quasi dignissimos dicta enim, doloribus illum eveniet facere iste, aut ab accusantium aliquam nesciunt nemo delectus in assumenda porro. Consequatur, tenetur vero.
                Voluptatem minus nam recusandae nemo ea numquam neque veniam, aliquid dignissimos inventore labore, perspiciatis similique eum nesciunt velit architecto veritatis quidem sunt repellat obcaecati impedit? Ea, reprehenderit quidem. Nulla, doloribus!</div>


        </>
    )
}