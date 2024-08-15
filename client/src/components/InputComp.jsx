import React from "react";

const InputComp = ({ error = "", name = "", register }) => {
  return (
    <div>
      {" "}
      <input
        type="text"
        {...register(name)}
        className={`block outline-none border-2 w-full p-2 rounded ${
          error ? "border-red-500" : ""
        }`}
        placeholder="Title"
      />
    </div>
  );
};

export default InputComp;
