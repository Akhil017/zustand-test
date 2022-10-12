import React from "react";
import useCourseStore from "../app/store";

function CourseList({ handleModal }) {
  const { courses, removeCourse, toggleCourseStatus } = useCourseStore(
    (state) => state
  );

  return (
    <div className="card w-full h-5/6 bg-base-100 shadow-xl flex items-center justify-center relative">
      <div className="absolute top-0 right-0 p-4">
        <button
          className="btn btn-success btn-sm"
          onClick={() => handleModal(true)}
        >
          Add Course
        </button>
      </div>
      {!courses.length ? (
        <>
          <p className="mb-4">you dont have any courses</p>
        </>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Course Name</th>
                <th>Completed</th>
                <th>delete</th>
              </tr>
            </thead>
            {courses.map((course, index) => {
              return (
                <tbody key={course.id}>
                  <tr>
                    <th>{index + 1}</th>
                    <td>{course.title}</td>
                    <th>
                      <input
                        onChange={() => toggleCourseStatus(course.id)}
                        type="checkbox"
                        className="checkbox"
                        value={course.completed}
                      />
                    </th>
                    <th>
                      <button
                        className="btn text-red-500 btn-ghost btn-xs"
                        onClick={() => removeCourse(course.id)}
                      >
                        delete
                      </button>
                    </th>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      )}
    </div>
  );
}

export default CourseList;
