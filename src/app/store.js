import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import courseSlice from "./slices/courseSlice";
import todoSlice from "./slices/todoSlice";

const useCourseStore = create(
  devtools(
    persist((...a) => ({
      ...courseSlice(...a),
      ...todoSlice(...a),
    })),
    { name: "courses" }
  )
);

export default useCourseStore;
