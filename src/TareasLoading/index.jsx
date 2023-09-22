import HashLoader from "react-spinners/HashLoader";
const TareasLoading = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="font-extrabold text-2xl text-center text-indigo-500  py-5">
        Cargando...
      </p>
      <HashLoader color="#6366F1" />
    </div>
  );
};
export default TareasLoading;
