import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./slice/todoslice";
export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
