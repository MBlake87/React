import React from "react";
import BaguetteCard from "../components/UI/BaguetteCard";

const DUMMY_DATA = [
  {
    id: 1,
    type: "Baguette",
    image: "https://picsum.photos/200",
    name: "Ham and Cheese",
    ingredients: ["Ham", "Cheese", "Baguette"],
    cost: [0.52, 2, 3],
  },
  {
    id: 2,
    type: "Baguette",
    image: "https://picsum.photos/200",
    name: "Cheese and Tomato",
    ingredients: ["Tomato", "Cheese", "Baguette"],
    cost: [1, 2, 3],
  },
];

const ShowBag = () => {
  return (
    <div className="w-[100vw] flex justify-center">
      <BaguetteCard items={DUMMY_DATA}></BaguetteCard>
    </div>
  );
};

export default ShowBag;
