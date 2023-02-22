import React from "react";
// import { useNavigate } from "react-router-dom";
export default function Home() {
  const handleLogout = () => {};

  return (
    <>
      <div>Home Page</div>
      <button onClick={handleLogout}>Log out</button>
    </>
  );
}
