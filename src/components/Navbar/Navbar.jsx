import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-5 py-2 ">
      <h1>DragonBall Z Memory Game</h1>
      <div className="flex gap-10">
        <h3>Score: </h3>
        <h3>Best Score: </h3>
      </div>
    </nav>
  );
};

export default Navbar;
