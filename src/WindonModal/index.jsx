import React from "react";
import { TodoConext } from "../TodoConext";
import { AiOutlineCloseCircle } from "react-icons/ai";

const WindonModal = () => {
  const { isModalOpen, setIsModalOpen, setTareasList, tareasList } =
    React.useContext(TodoConext);
  const [inpueValue, setInpurValue] = React.useState("");
  const [animationState, setAnimationState] = React.useState("closed");

  const openModal = () => {
    setAnimationState("entering");
  };

  const closeModal = () => {
    setAnimationState("leaving");
    setTimeout(() => setAnimationState("closed"), 300);
  };

  React.useEffect(() => {
    if (animationState === "entering") {
      setIsModalOpen(true);
    }
    if (animationState === "closed") {
      setIsModalOpen(false);
    }
  }, [animationState, setIsModalOpen]);

  React.useEffect(() => {
    if (isModalOpen) {
      openModal();
    } else {
      closeModal();
    }
  }, [isModalOpen]);

  const newTarea = (e) => {
    setInpurValue(e.target.value);
  };

  const saveNewTarea = (e) => {
    e.preventDefault();
    if (inpueValue === "") {
      return;
    }
    const newObjTarea = {
      text: inpueValue,
      completed: false,
    };
    const isDuplicate = tareasList.some(
      (tarea) => tarea.text === newObjTarea.text
    );

    if (!isDuplicate) {
      const tareasArray = [...tareasList, newObjTarea];
      setTareasList(tareasArray);
    } else {
      // Mostrar un mensaje indicando que la tarea ya existe
    }

    closeModal();
  };

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-start z-50 p-10">
          <div className="bg-black opacity-40 absolute inset-0"></div>

          <div
            className={`bg-white p-4 sm:p-8 rounded-lg w-full sm:w-1/3 shadow-lg z-10 relative ${
              animationState === "entering"
                ? "modal-entering"
                : animationState === "leaving"
                ? "modal-leaving"
                : ""
            }`}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <AiOutlineCloseCircle className="text-gray-900-300" />
            </button>

            <h2 className="font-bold mb-4 text-gray-700 text-center">
              Agregar tarea
            </h2>

            <form>
              <input
                type="text"
                className="p-2 w-full rounded border focus:border-indigo-500 focus:outline-none"
                placeholder="Nombre de la tarea"
                onChange={newTarea}
              />
              <button
                onClick={saveNewTarea}
                className="font-bold mt-4 bg-indigo-600 text-white p-2 w-full rounded hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200"
              >
                Agregar
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default WindonModal;
