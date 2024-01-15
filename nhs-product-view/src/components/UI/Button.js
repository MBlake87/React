import React from "react";

const Button = (props) => {
  return (
    <button className="shadow-lg bg-slate-100 text-[32px] p-5 active:drop-shadow-lg">
      {props.name}
    </button>
  );
};

export default Button;
