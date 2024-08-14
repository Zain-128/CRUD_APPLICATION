import React from "react";

const Button = ({ text = "" }) => {
  return (
    <button className="bg-white text-black px-6 py-2 rounded hover:bg-gray-300 duration-200">
      {text}
    </button>
  );
};

export default Button;
