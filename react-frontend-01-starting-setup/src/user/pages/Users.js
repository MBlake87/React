import React from "react";
import UsersList from "../components/UsersList";
function Users() {
  const USERS = [
    {
      id: 1,
      name: "Mark Blake",
      image: "https://picsum.photos/200",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
}

export default Users;
