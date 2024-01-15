import React from "react";

export default function mainHeader(props) {
  return (
    <header className="w-[100%] h-[4rem] flex align-middle fixed top-0 left-0 px-0 pt-1 border z-5 lg:justify-between">
      {props.children}
    </header>
  );
}
