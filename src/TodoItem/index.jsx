import { AiFillDelete, AiFillCheckSquare } from "react-icons/ai";

const TodoItem = ({ text, completed, tareasList, setTareasList }) => {
  const handleComplet = () => {
    const completTarea = tareasList.map((tarea) => {
      return tarea.text === text
        ? { ...tarea, completed: !tarea.completed }
        : tarea;
    });
    setTareasList(completTarea);
  };

  const deleteTarea = () => {
    const deleteTarea = tareasList.filter((tarea) => text !== tarea.text);
    setTareasList(deleteTarea);
  };
  return (
    <li
      className={`todo-item flex items-center justify-between p-4 gap-2 bg-white border-l-4 ${
        completed ? "border-green-400" : "border-indigo-600"
      } shadow-md rounded-lg my-2 hover:bg-gray-100 transition w-full max-w-4xl mx-auto`}
    >
      <button
        className={`${
          completed ? "text-green-600" : "text-gray-700"
        } indicator text-2xl font-mono text-gray-600 flex-shrink-0`}
        onClick={handleComplet}
      >
        <AiFillCheckSquare />
      </button>
      <p
        className={`text-content ${
          completed ? "line-through text-gray-400" : "text-gray-900"
        } text-lg font-mono w-full px-4 py-2 bg-gray-100 rounded-lg truncate`}
      >
        {text}
      </p>
      <button
        className="delete-icon text-gray-600 hover:text-red-800 cursor-pointer text-2xl font-mono flex-shrink-0"
        onClick={deleteTarea}
      >
        <AiFillDelete />
      </button>
    </li>
  );
};

export default TodoItem;
