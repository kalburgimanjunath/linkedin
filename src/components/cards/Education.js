import React from "react";
import Avatar from "../Avatar";
export default function Education({ title }) {
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
