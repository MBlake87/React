import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
function SideDraw(props) {
  const content = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames={"slide-in-left"}
      mountOnEnter
      unmountOnExit
    >
      <aside
        className="fixed left-0 top-0 z-100 h-[100vh] w-[70%] bg-gray-100 "
        onClick={props.onClick}
      >
        {props.children}
      </aside>
    </CSSTransition>
  );

  return ReactDOM.createPortal(content, document.getElementById("draw-hook"));
}

export default SideDraw;
