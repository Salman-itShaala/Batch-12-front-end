import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// https://dummyjson.com/todos
// sliceName/getTodos

export const getTodos = createAsyncThunk("todo/getTodos", async () => {
  const res = await fetch("https://dummyjson.com/todos");
  const data = await res.json();

  return data.todos;
});

export const saveTodo = createAsyncThunk("todo/saveTodo", async (todo) => {
  fetch("save", { method: "POST", body: JSON.stringify(todo) });
  console.log("Saving todo", todo);
  return { msg: "to do saved" };
});

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    status: "loading",
  },
  reducers: {
    addTodo: (state, action) => {
      action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodos.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        console.log("Succeded");
        state.todos = action.payload;
        state.status = "succesded";
      })
      .addCase(getTodos.rejected, (state, action) => {
        state.status = "failed";
      })
      .addCase(saveTodo.fulfilled, (state, action) => {
        console.log(action.payload);
      });
  },
});

export const todoReducer = todoSlice.reducer;
