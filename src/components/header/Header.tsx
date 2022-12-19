import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex justify-between">
      <p className="text-xl font-bold">CounterApp</p>
      {/* <p>
        {" "}
        <Link to={""}>Logout</Link>{" "}
      </p> */}
    </nav>
  );
};

export default Header;
