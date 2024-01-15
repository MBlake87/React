import React from "react";
import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Lincoln Cathedral",
    description: "Was once the tallest building in the world",
    address: "Minster Yard, Lincoln LN2 1PX",
    location: [-0.5360156, 53.2342968],
    image:
      "https://lh3.googleusercontent.com/p/AF1QipOHih8DYfKofVMAJJaSLKeT995EeBEJCIoxUFNH=s680-w680-h510",
    creator: "1",
  },
  {
    id: "p2",
    title: "Lincoln Cathedral",
    description: "Was once the tallest building in the world",
    address: "Minster Yard, Lincoln LN2 1PX",
    location: [-0.5360156, 53.2342968],
    image:
      "https://lh3.googleusercontent.com/p/AF1QipOHih8DYfKofVMAJJaSLKeT995EeBEJCIoxUFNH=s680-w680-h510",
    creator: "2",
  },
];

const UserPlaces = () => {
  const userId = useParams().uid;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
