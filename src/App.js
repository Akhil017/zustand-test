import { useState, useEffect } from "react";
import CourseList from "./components/CourseList";
import CustomForm from "./components/CustomForm";
import ModalForm from "./components/ModalForm";
import useCourseStore from "./app/store";
import Loader from "./components/Loader";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { fetchTodos, isLoading } = useCourseStore((state) => state);

  useEffect(() => {
    fetchTodos();
  }, []);

  if (isLoading) return <Loader />;
  console.log({ isLoading });

  return (
    <div className="bg-slate-100">
      <div className="container mx-auto h-screen flex items-center justify-center">
        <ModalForm isModalOpen={isModalOpen} handleModal={setIsModalOpen} />
        {!isModalOpen && <CourseList handleModal={setIsModalOpen} />}
      </div>
    </div>
  );
}

export default App;
