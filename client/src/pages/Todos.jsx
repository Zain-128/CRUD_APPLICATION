import React, { useState } from "react";
import Button from "../components/Button";
import { FaCirclePlus } from "react-icons/fa6";
import Modal from "../components/Popup";
import AddTodoForm from "../components/Todos/AddTodoForm";

import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
const dummyTodos = [
  {
    id: 1,
    title: "Learn React",
    description: "Learn the basics of React and build a simple app",
  },
  {
    id: 2,
    title: "Finish Project",
    description: "Complete the project report and submit it to the manager",
  },
  {
    id: 3,
    title: "Buy Groceries",
    description: "Buy milk, eggs, and bread from the store",
  },
  {
    id: 4,
    title: "Call John",
    description: "Call John to discuss the meeting schedule",
  },
  {
    id: 5,
    title: "Walk the Dog",
    description: "Take the dog for a 30-minute walk in the park",
  },
];
const Todos = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <main className="max-w-7xl w-[94%] mx-auto">
      <div className="flex justify-end">
        <div className="flex items-center rounded px-2 hover:bg-gray-300 duration-200 bg-white">
          <FaCirclePlus className=" text-blue-500" size={30} />
          <Button
            text="Add Todo"
            extraStyle="text-xl !px-2 font-semibold"
            onClickHandler={openModal}
          />
        </div>
      </div>
      <div>
        <Modal isOpen={modalOpen} onClose={closeModal}>
          <AddTodoForm />
        </Modal>
      </div>

      <div className="flex gap-6 mt-8 flex-wrap justify-center">
        {dummyTodos.map((ele, index) => {
          return (
            <div
              key={index}
              className="bg-white shadow-md text-black rounded p-4 min-w-[250px] max-w-[440px] w-[350px] min-h-40 flex flex-col"
            >
              <h4 className="text-2xl">{ele?.title}</h4>
              <p className="text-[14px] mt-3 line-clamp-6 flex-1">
                {ele?.description}
              </p>
              <div className="flex justify-end ">
                <AiOutlineEdit
                  className="text-blue-500 cursor-pointer mr-4"
                  size={24}
                  onClick={() => console.log("Edit clicked")}
                />
                <AiOutlineDelete
                  className="text-red-500 cursor-pointer"
                  size={24}
                  onClick={() => console.log("Delete clicked")}
                />
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Todos;
