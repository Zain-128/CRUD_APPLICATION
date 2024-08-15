import React from "react";
import InputComp from "../components/InputComp";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

const schema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const navigate = useNavigate();

  return (
    <main className="flex items-center">
      <div className="flex-1 flex items-center  min-h-[80vh] justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="text-[16px] px-5 flex flex-col   gap-4 pb-4 text-black max-w-[440px] w-[94%] mx-auto"
        >
          <h2 className="text-center text-4xl font-semibold mb-5 text-white">
            Signin{" "}
          </h2>

          <InputComp
            error={errors.email}
            name={"email"}
            placeholder="Email"
            register={register}
          />
          <InputComp
            error={errors.password}
            name={"password"}
            placeholder="Password"
            register={register}
            type="password"
          />
          <Button
            text="Submit"
            type="Submit"
            extraStyle={"bg-blue-500 text-white mt-3"}
          />
          <p className="text-xs text-white -mt-3">
            Don't Have an account ?
            <Link className="text-blue-500 cursor-pointer" to={"/signup"}>
              {" "}
              Signup
            </Link>{" "}
          </p>
        </form>
      </div>
      <div className="h-[70vh] flex-1 lg:block hidden">
        <img
          src="/signup_image.webp"
          className="h-full w-full object-contain"
        />
      </div>
    </main>
  );
};

export default Signin;
