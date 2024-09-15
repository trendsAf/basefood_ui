import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="border-b text-black p-4 fixed w-full bg-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">baseFood</div>
        <div>
          <Link to="/login" className="hover:underline">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
