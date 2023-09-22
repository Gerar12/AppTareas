import { IoAdd } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";
import { TodoConext } from "../TodoConext";
import React from "react";

const CrearTodoButoon = () => {
  const { setIsModalOpen, setSerachValue } = React.useContext(TodoConext);
  const handleAddTodo = () => {
    setIsModalOpen(true);
    setSerachValue("");
  };

  return (
    <>
      <div className="fixed bottom-4 right-4 z-10 flex items-center space-x-4">
        <p className=" animate-pulse p-2 rounded  font-bold">Nueva tarea</p>

        <BsArrowRight className="text-black w-12 h-12 flex items-center justify-center text-4xl animate-pulse" />

        <button
          className="animate-pulse bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-3xl shadow-lg hover:bg-indigo-900 focus:outline-none focus:ring focus:ring-blue-200 font-extrabold"
          onClick={handleAddTodo}
        >
          <IoAdd />
        </button>
      </div>
    </>
  );
};

export default CrearTodoButoon;
