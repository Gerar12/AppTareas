import React from "react";
import TodoCounter from "../TodoCounter";
import TodoSerh from "../TodoSerh";
import TodoList from "../TodoList";
import TodoItem from "../TodoItem";
import WindonModal from "../WindonModal";
import CrearTodoButoon from "../CrearTodoButoon";
import TareasLoading from "../TareasLoading";
import { TodoConext } from "../TodoConext";

const App = () => {
  const { tareasList, setTareasList, serchFilter, loading } =
    React.useContext(TodoConext);
  return (
    <div className="bg-white rounded-lg shadow-md p-8 m-10 w-full h-full max-w-4xl mx-auto  ">
      <TodoCounter />
      <TodoSerh />
      <TodoList>
        {loading ? (
          <TareasLoading />
        ) : (
          serchFilter.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              tareasList={tareasList}
              setTareasList={setTareasList}
            />
          ))
        )}
      </TodoList>
      <CrearTodoButoon />
      <WindonModal />
    </div>
  );
};

export default App;
