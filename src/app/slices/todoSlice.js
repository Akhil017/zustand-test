import axios from "axios";
const baseURL = "https://jsonplaceholder.typicode.com/todos/";

const todoSlice = (set) => ({
  todos: [],
  isLoading: false,
  isError: false,
  fetchTodos: async () => {
    set({ isLoading: true });
    console.log("fetching todos set isloading to true");
    try {
      const { data, status } = await axios.get(baseURL);
      console.log({ status });
      console.log("fetching success set isloading to FALSE");
      setTimeout(() => {
        set({ todos: data, isLoading: false });
      }, 1000);
    } catch (error) {
      console.log(error);
      set({ isLoading: false });
    }
  },
  addTodo: (todo) => {
    set((state) => ({
      todos: [...state.todos, todo],
    }));
  },
  removeTodo: (todoId) => {
    set((state) => ({
      todos: state.todos.filter((t) => t.id !== todoId),
    }));
  },
  toggleCourseStatus: (todoId) => {
    set((state) => ({
      todos: state.todos.map((t) =>
        t.id === todoId ? { ...t, completed: !t.completed } : t
      ),
    }));
  },
});

export default todoSlice;
