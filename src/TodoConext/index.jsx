import React from "react";
import useLocalStorage from "./useLocalStorage";

const TodoConext = React.createContext();

const TodoProviner = ({ children }) => {
  const [serachValue, setSerachValue] = React.useState("");
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const {
    value: tareasList,
    setValue: setTareasList,
    loading,
  } = useLocalStorage("tareasLocal", []);

  const serchFilter = tareasList.filter((tareas) =>
    tareas.text.toLowerCase().includes(serachValue.toLowerCase())
  );

  return (
    <TodoConext.Provider
      value={{
        tareasList,
        serachValue,
        setTareasList,
        serchFilter,
        setSerachValue,
        loading,
        setIsModalOpen,
        isModalOpen,
      }}
    >
      {children}
    </TodoConext.Provider>
  );
};

export { TodoConext, TodoProviner };
