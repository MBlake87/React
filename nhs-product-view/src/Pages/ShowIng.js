import React from "react";
import IngCard from "../components/UI/IngCard";

const DUMMY_DATA = [
  {
    id: 1,
    name: "Baguette",
    cost: 0.5,
  },
  {
    id: 2,
    name: "Cheese",
    cost: 1,
  },
  { id: 3, name: "Ham", cost: 2 },
];

const ShowIng = () => {
  return (
    <div className="w-[100vw] flex justify-center">
      <IngCard items={DUMMY_DATA}></IngCard>
    </div>
  );
};

export default ShowIng;
