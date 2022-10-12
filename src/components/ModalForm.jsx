import React, { useEffect, useState } from "react";
import useCourseStore from "../app/store";
import Modal from "react-modal";

function ModalForm({ isModalOpen, handleModal }) {
  const { addCourse } = useCourseStore((state) => state);
  const [courseTitle, setCourseTitle] = useState("");
  const [modalIsOpen, setmodalIsOpen] = useState(false);

  useEffect(() => {
    setmodalIsOpen(isModalOpen);
  }, [isModalOpen]);

  function closeModal() {
    handleModal(false);
  }

  const handleCourseSubmit = () => {
    if (!courseTitle) return alert("please give a course title");
    addCourse({
      id: Math.ceil(Math.random() * 100000),
      title: courseTitle,
      completed: false,
    });
    setCourseTitle("");
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      className="flex items-center justify-center h-full"
    >
      <form
        className="md:flex bg-white flex-col w-full max-w-md shadow-md h-1/2 rounded-md p-10 justify-center items-center relative"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="absolute top-0 right-0 p-4">
          <button
            className="btn btn-sm btn-square btn-outline"
            onClick={() => handleModal(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="md:items-start mb-6">
          <div className="md:w-full mb-2">
            <label
              className="block text-gray-500 font-bold  mb-1 md:mb-0 pr-4"
              htmlFor="course-title"
            >
              Course title
            </label>
          </div>
          <div className="md:w-full">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="course-title"
              value={courseTitle}
              type="text"
              onChange={(e) => setCourseTitle(e.target.value)}
            />
          </div>

          <div className="md:w-full mt-10">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={handleCourseSubmit}
            >
              Add course
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
}

ModalForm.defaultProps = {
  isModalOpen: false,
};

export default ModalForm;
