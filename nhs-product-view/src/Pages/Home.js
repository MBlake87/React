import React from "react";
import Button from "../components/UI/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-[100%] flex justify-center">
      <div className="flex w-[50%] h-[60vh] justify-around items-center ">
        <Link to="/Baguettes">
          <Button name={"Baguettes"} />
        </Link>
        <Link to="/Wraps">
          <Button name={"Wraps"} />{" "}
        </Link>
        <Link to="/Ingredients">
          <Button name={"Ingredients"} />
        </Link>
      </div>
    </div>
  );
};

export default Home;
