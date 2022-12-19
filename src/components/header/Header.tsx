import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex justify-between">
      <p className="text-xl font-bold text-blue-600">CounterApp</p>
      <p className="text-red-600 font-semibold">
        
        <Link to="/">Logout</Link>{" "}
      </p>
    </nav>
  );
};

export default Header;
