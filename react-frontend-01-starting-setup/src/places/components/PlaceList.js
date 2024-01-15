import React from "react";
import Card from "../../shared/components/Card/Card";
import "./PlaceList.css";
import PlaceItem from "./PlaceItem";

const PlaceList = (props) => {
  return props.items.length === 0 ? (
    <div className="place-list center">
      <Card>
        <h2>No Places Found... Maybe Create One?</h2>
        <button>Create Place</button>
      </Card>
    </div>
  ) : (
    <ul className="place-list">
      {props.items.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.image}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          location={place.location}
        />
      ))}
    </ul>
  );
};

export default PlaceList;
