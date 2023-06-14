import React from 'react'
import logo from "../images/abstract-shape.png"
import { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from 'react-router-dom'


export function Nav() {

    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }
    return (
        <nav className='flex flex-col justify-start md:justify-between md:flex-row'>
            <div className='bg-gray-700 text-[#c7ccdb] flex min-w-fit items-center'>
                <img className="h-12 pl-3" src={logo} alt="logo" />
                <p className='font-Roboto tracking-[.5rem] ml-2 text-[2rem] font-semibold hover:text-[#93b7be] duration-500 md:hover:tracking-[1.5rem]'>Mark Blake</p>
            </div>
            <div className={`bg-gray-700 w-[100%] md:flex md:items-center ${(click ? "hidden" : "flex")}`}>
                <ul className='flex w-[100%] text-[#c7ccdb] flex-col md:flex md:flex-row md:justify-end border-b'>
                    <li className="py-5 md:px-5 text-center text-[1.3rem] hover:text-[#93b7be] duration-500 hover:underline">
                        <Link onClick={handleClick} to="/">Home</Link>
                    </li>
                    <li className="py-5 md:px-5 text-center text-[1.3rem] hover:text-[#93b7be] duration-500 hover:underline">
                        <Link onClick={handleClick} to="/about">About</Link>
                    </li>
                    <li className="py-5 md:px-5 text-center text-[1.3rem] hover:text-[#93b7be] duration-500 hover:underline">
                        <Link onClick={handleClick} to="/projects">Projects</Link>
                    </li>
                    <li className="py-5 md:px-5 text-center text-[1.3rem] hover:text-[#93b7be] duration-500 hover:underline">
                        <Link onClick={handleClick} to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
            <div className="mr-5 absolute top-3 right-3 md:hidden" onClick={handleClick}>
                {click ? <FaBars size={30} /> : <FaTimes size={30} />}
            </div>
        </nav >
    )
}

