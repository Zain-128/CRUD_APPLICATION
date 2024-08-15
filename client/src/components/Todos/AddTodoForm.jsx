import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Button from "../Button";
import InputComp from "../InputComp";

const schema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
});

const AddTodoForm = () => {
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

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="text-[16px] px-5 flex flex-col gap-5 pb-4"
    >
      <h2 className="text-center text-4xl font-semibold">Add Todo</h2>
      <InputComp error={errors.title} name={"title"} register={register} />
      <div>
        <textarea
          {...register("description")}
          placeholder="Description"
          className={`outline-none border-2 rounded w-full resize-none min-h-40 p-2 ${
            errors.description ? "border-red-500" : ""
          }`}
        />
      </div>
      <Button
        text="Submit"
        type="Submit"
        extraStyle={"bg-blue-500 text-white"}
      />
      {/* <button type="submit">Submit</button> */}
    </form>
  );
};

export default AddTodoForm;
