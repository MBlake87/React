import React from "react";
import Card from "../../shared/components/Card/Card";
import "./UsersList.css";
import UsersItem from "./UsersItem";
const UsersList = (props) => {
  console.log(props);
  return props.items.length === 0 ? (
    <Card>
      <h2 className="center">No Users Found</h2>
    </Card>
  ) : (
    <ul className="users-list">
      {props.items.map((user) => (
        <UsersItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places}
        />
      ))}
    </ul>
  );
};

export default UsersList;
