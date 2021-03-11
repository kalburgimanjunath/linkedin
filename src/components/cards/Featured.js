import React from "react";
export default function Featured({ title }) {
  const details = "Image goes here";
  return (
    <div>
      <h1>{title}</h1>
      <img
        src="https://media-exp1.licdn.com/dms/image/C562DAQGEGb3wxcoYLA/profile-treasury-document-cover-images_480/0/1602080540280?e=1615568400&v=beta&t=YbBzfGHbeMH5Dv_CmzRzaeZrf8Uv9wzktBXDyJcpCH4"
        width="100"
      />
    </div>
  );
}
