import React, { useState } from "react";
import useCourseStore from "../app/store";

function CustomForm() {
  const { addCourse } = useCourseStore((state) => state);
  const [courseTitle, setCourseTitle] = useState("");

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
    <form className="md:flex bg-slate-50 flex-col w-full max-w-md shadow-md h-1/2 rounded-md p-10 justify-center items-center">
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
  );
}

export default CustomForm;
