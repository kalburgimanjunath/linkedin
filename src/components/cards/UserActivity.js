import React from "react";
import Avatar from "../Avatar";
export default function UserActivity({ title }) {
  const users = [
    {
      name: "abc",
      title: "title"
    },
    {
      name: "abc",
      title: "title"
    },
    {
      name: "abc",
      title: "title"
    },
    {
      name: "abc",
      title: "title"
    }
  ];
  return (
    <div>
      <h1>{title}</h1>
      <div>1532 followers</div>
      {users.map(item => {
        return (
          <div>
            <Avatar user={users} />
            <div>{item.name}</div>
            <div>{item.title}</div>
          </div>
        );
      })}
    </div>
  );
}
