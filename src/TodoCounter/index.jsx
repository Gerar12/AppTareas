import React from "react";
import { TodoConext } from "../TodoConext";

const TodoCounter = () => {
  const { loading, tareasList } = React.useContext(TodoConext);
  const totalNumber = tareasList.length;
  const completedNumber = tareasList.filter((todo) => todo.completed).length;

  return (
    <>
      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-4">
        {loading ? (
          <>
            App by: <span className="text-gray-700 font-extrabold"> Gerar</span>
          </>
        ) : totalNumber === 0 ? (
          <>Comienza con una tarea 👀</>
        ) : completedNumber === totalNumber ? (
          <>Todas las tareas completadas 🎉</>
        ) : (
          <>
            Has finalizado <span className="text-black">{completedNumber}</span>{" "}
            tareas de <span className="text-black">{totalNumber}</span>
          </>
        )}
      </h1>
    </>
  );
};

export default TodoCounter;
