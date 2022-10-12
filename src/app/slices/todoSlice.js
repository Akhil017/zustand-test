const todoSlice = (set) => ({
  todos: [{ id: 8437, title: "champions league", completed: false }],
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
