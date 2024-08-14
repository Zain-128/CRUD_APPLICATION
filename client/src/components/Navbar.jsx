import React, { useState } from "react";
import Button from "./Button";

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
        className={`lg:flex items-center gap-8 absolute md:static ${
          !count ? "-translate-y-[1000px] lg:translate-y-0" : "translate-y-0"
        } transition-all duration-[2000ms] text-[0.9rem]`}
      >
        <li className="hover:text-gray-300 duration-200">Home </li>
        <li className="hover:text-gray-300 duration-200">About US </li>
        <li className="hover:text-gray-300 duration-200">Todo </li>
        <Button text="Signup" />
        <Button text="Signin" />
        <Button text="Signout" />
      </ul>
    </nav>
  );
};

export default Navbar;
