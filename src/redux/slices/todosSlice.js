import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: { data: [] },
  reducers: {
    addTodo(state, action) {
      state.data.push(action.payload);
    },
    removeTodo(state, action) {
      state.data = state.data.filter((todo) => todo.id !== action.payload);
    },
    toggleCompleteTodo(state, action) {
      state.data = state.data.map((todo) =>
        todo.id === action.payload
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      );
    },
  },
});

export const { addTodo, removeTodo, toggleCompleteTodo } = todosSlice.actions;

export default todosSlice.reducer;
