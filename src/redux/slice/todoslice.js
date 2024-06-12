import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchTodos = createAsyncThunk("fetchtodos", async () => {
  const responce = await fetch("https://jsonplaceholder.typicode.com/todos/");
  return responce.json();
});

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default todoSlice.reducer;
