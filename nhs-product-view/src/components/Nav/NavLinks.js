import React from "react";
import { NavLink } from "react-router-dom";
function NavLinks(props) {
  return (
    <ul className="list-none mt-3 w-[100%] h-[100%] flex flex-col justify-items-center align-middle lg:flex-row">
      <li className="mx-[2rem] my-[1.5rem] lg:my-0 lg:mx-[0.5rem] hover:underline hover:text-gray-500">
        <NavLink to="/Baguettes">Baguettes</NavLink>
      </li>
      <li className="mx-[2rem] my-[1.5rem] lg:my-0 lg:mx-[0.5rem] hover:underline hover:text-gray-500">
        <NavLink to="/Wraps">Wraps</NavLink>
      </li>
      <li className="mx-[2rem] my-[1.5rem] lg:my-0 lg:mx-[0.5rem] hover:underline hover:text-gray-500">
        <NavLink to="/Ingredients">Add Ingredients</NavLink>
      </li>
    </ul>
  );
}

export default NavLinks;
