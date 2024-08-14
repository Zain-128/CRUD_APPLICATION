import React, { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [count, setCount] = useState(0);
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

      {count ? (
        <p
          className="absolute lg:hidden top-2 right-2"
          onClick={() => setCount((prev) => !prev)}
        >
          S
        </p>
      ) : (
        <p
          className="absolute lg:hidden top-2 right-2"
          onClick={() => setCount((prev) => !prev)}
        >
          x
        </p>
      )}
      <ul
        className={`lg:flex items-center gap-8 absolute lg:static ${
          !count
            ? "-translate-y-[1000px] translate-x-[1000px] lg:translate-y-0"
            : "translate-y-0"
        } transition-all duration-[1000ms] text-[0.9rem] mt-5 lg:mt-0`}
      >
        <li className="hover:text-gray-300 duration-200 cursor-pointer py-3">
          <Link to={"/"}>HOME </Link>
        </li>
        <li className="hover:text-gray-300 duration-200 cursor-pointer py-3">
          <Link to={"/about"}>ABOUT US </Link>
        </li>
        <li className="hover:text-gray-300 duration-200 cursor-pointer py-3">
          <Link to={"/addtodo"}>ADD TODO </Link>
        </li>
        <Button text="Signup" extraStyle={"mx-2"} />
        <Button text="Signin" extraStyle={"mx-2"} />
        <Button text="Signout" extraStyle={"mx-2"} />
      </ul>
    </nav>
  );
};

export default Navbar;
