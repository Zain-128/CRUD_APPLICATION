import React, { useState } from "react";
import Button from "../components/Button";
import { FaCirclePlus } from "react-icons/fa6";
import Modal from "../components/Popup";
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
          <Button text="Add Todo" extraStyle="text-xl !px-2 font-semibold" />
        </div>
      </div>
      <div>
        <h1>Modal Demo</h1>
        <button onClick={openModal}>Open Modal</button>
        <Modal isOpen={modalOpen} onClose={closeModal}>
          <h2>Modal Content</h2>
          <p>This is the content of the modal.</p>
        </Modal>
      </div>
    </main>
  );
};

export default Todos;
