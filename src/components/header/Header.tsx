import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [logout, setLogout] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("auth"))
      navigate("/login");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [logout]);

  const handleLogout = (e: any) => {
    e.preventDefault();
    localStorage.removeItem("auth");
    setLogout(true);
  };
  return (
    <nav className="flex justify-between">
      <a href="/" className="flex gap-2 items-center mb-4 sm:mb-0">
        <div className="px-4 py-4 bg-blue-700 rounded-md h-8" />
        <span className="self-center lg:text-2xl text-xl font-semibold whitespace-nowrap dark:text-white">CounterApp</span>
      </a>
      <p onClick={handleLogout} className="text-red-600 font-semibold">
        <Link to="/">Logout</Link>{" "}
      </p>
    </nav>
  );
};

export default Header;
