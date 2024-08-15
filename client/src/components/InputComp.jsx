import React, { useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
const InputComp = ({
  error = "",
  placeholder = "",
  name = "",
  register,
  type = "text",
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="relative">
      {type === "text" ? (
        <input
          type="text"
          {...register(name)}
          className={`block outline-none border-2 w-full p-2 rounded ${
            error ? "border-red-500" : ""
          }`}
          placeholder={placeholder}
        />
      ) : (
        <>
          <input
            type={showPassword ? "text" : "password"}
            {...register(name)}
            className={`block outline-none border-2 w-full p-2 rounded ${
              error ? "border-red-500" : ""
            }`}
            placeholder={placeholder}
          />

          {showPassword ? (
            <IoIosEye
              color="black"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute top-[11px] right-2 cursor-pointer"
              size={24}
            />
          ) : (
            <IoIosEyeOff
              color="black"
              className="absolute top-[11px] right-2 cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
              size={24}
            />
          )}
        </>
      )}{" "}
    </div>
  );
};

export default InputComp;
