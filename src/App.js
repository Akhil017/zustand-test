import { useState } from "react";
import CourseList from "./components/CourseList";
import CustomForm from "./components/CustomForm";
import ModalForm from "./components/ModalForm";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log({ isModalOpen });
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
