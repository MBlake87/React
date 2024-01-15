import React from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return ReactDOM.createPortal(
    <div
      className="fixed top-0 left-0 w-[100%] h-[100vh] z-6 bg-[rgba(255,255,255,0.75)] "
      onClick={props.onClick}
    ></div>,
    document.getElementById("backdrop-hook")
  );
};

export default Backdrop;
