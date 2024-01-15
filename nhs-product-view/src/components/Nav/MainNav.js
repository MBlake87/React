import React from "react";
import { useState } from "react";
import MainHeader from "./MainHeader";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import SideDraw from "./SideDraw";
import BackDrop from "./BackDrop";
function MainNav() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDraw = () => {
    setIsDrawerOpen(true);
  };
  const closeDraw = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      {isDrawerOpen && <BackDrop onClick={closeDraw} />}
      <SideDraw show={isDrawerOpen}>
        <nav className="h-100%" onClick={closeDraw}>
          <NavLinks />
        </nav>
      </SideDraw>

      <MainHeader>
        <button
          className="flex flex-col w-[3rem] h-[3rem] bg-transparent border-0 lg:hidden justify-around mr-[1rem] cursor-pointer)"
          onClick={openDraw}
        >
          <span className="block  ml-2 w-[2.25rem] h-[1.5px] bg-black" />
          <span className="block  ml-2 w-[2.25rem] h-[1.5px] bg-black" />
          <span className="block ml-2 w-[2.25rem] h-[1.5px] bg-black" />
        </button>
        <h1 className="text-[1.75rem] lg:tracking-[.25rem] ml-5 cursor-pointer">
          <Link to="/">Product Specifications</Link>
        </h1>
        <nav className="hidden lg:block">
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  );
}

export default MainNav;
