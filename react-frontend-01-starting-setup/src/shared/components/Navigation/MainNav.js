import React from "react";
import { useState } from "react";
import "./MainNav.css";
import MainHeader from "./MainHeader";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import SideDraw from "./SideDraw";
import BackDrop from "./Backdrop/Backdrop";
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
        <nav className="main-navigation__drawer-nav" onClick={closeDraw}>
          <NavLinks />
        </nav>
      </SideDraw>

      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={openDraw}>
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          Your Places<Link to="/"></Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  );
}

export default MainNav;
