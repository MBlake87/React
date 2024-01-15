import React from "react";
import "./MainHeader.css";
export default function mainHeader(props) {
  return <header className="main-header">{props.children}</header>;
}
