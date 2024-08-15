import React, { useState } from "react";
import Button from "./Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navigate = useNavigate();
  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="p-3 lg:flex max-w-7xl w-[94%] mx-auto justify-between items-center">
      <div className="flex items-center gap-2">
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/papercut/48/moleskine.png"
          alt="moleskine"
          className="object-cover"
        />
        <h1 className="text-[2rem] font-semibold">TODO</h1>
      </div>

      {menuOpen ? (
        <RxCross2
          className="absolute lg:hidden top-5 right-4"
          onClick={handleMenuToggle}
          size={30}
        />
      ) : (
        <GiHamburgerMenu
          className="absolute lg:hidden top-5 right-4"
          onClick={handleMenuToggle}
          size={30}
        />
      )}
      <ul
        className={`lg:flex items-center gap-8 absolute  top-14 h-[87vh] lg:h-auto lg:static ${
          !menuOpen
            ? "-translate-x-[1000px]  lg:translate-x-0"
            : "translate-x-0"
        } transition-all duration-[1000ms] text-[14px] mt-5 lg:mt-0   p-3 lg:text-white bg-white/60 text-black  w-screen lg:bg-transparent left-0 lg:w-auto`}
        style={{ backgroundBlur: 8 }}
      >
        <li
          className={`hover:text-gray-300 duration-200 cursor-pointer py-3 my-2 ${
            location.pathname === "/" ? " border-b" : ""
          }`}
        >
          <Link to={"/"}>HOME </Link>
        </li>
        <li
          className={`hover:text-gray-300 duration-200 cursor-pointer py-3 my-2 ${
            location.pathname === "/about" ? "border-b" : ""
          }`}
        >
          <Link to={"/about"}>ABOUT US </Link>
        </li>
        <li
          className={`hover:text-gray-300 duration-200 cursor-pointer py-3 my-2 ${
            location.pathname === "/todos" ? "border-b" : ""
          }`}
        >
          <Link to={"/todos"}>TODOS </Link>
        </li>
        <Button
          text="Signup"
          extraStyle={""}
          onClickHandler={() => navigate("/signup")}
        />
        <Button
          text="Signin"
          extraStyle={"lg:mx-0 mx-2"}
          onClickHandler={() => navigate("/signin")}
        />
        <Button text="Signout" extraStyle={"lg:mx-0 mx-2"} />
      </ul>
    </nav>
  );
};

export default Navbar;
