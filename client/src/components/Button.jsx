import React from "react";

const Button = ({ text = "", extraStyle = "" }) => {
  return (
    <button
      className={`bg-white text-black px-6 py-2 rounded hover:bg-gray-300 duration-200 ${extraStyle}`}
    >
      {text}
    </button>
  );
};

export default Button;
