import React from "react";
import { TodoConext } from "../TodoConext";

const TodoSerh = () => {
  const { serachValue, setSerachValue } = React.useContext(TodoConext);
  const handleChangeInput = (e) => {
    const search = e.target.value;
    setSerachValue(search);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Busca una tarea..."
        className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        onChange={handleChangeInput}
        value={serachValue}
      />
    </>
  );
};

export default TodoSerh;
