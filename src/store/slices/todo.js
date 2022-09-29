import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTodo = createAsyncThunk('todo/fetchTodo', async () => {
  const {data} = await axios.get(
    `https://api.unsplash.com/photos/random?count=20&client_id=SR2TVRoOoQ732wJYZGDs0AsNRyrAjWRAC2yCsyVUz6U`,
  );
  return data;
});

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todo: [],
    status: 'loading',
  },
  reducers: {},
  extraReducers: {
    [fetchTodo.pending]: state => {
      state.status = 'loading';
      state.todo = [];
    },
    [fetchTodo.fulfilled]: (state, action) => {
      state.status = 'loaded';
      state.todo = action.payload;
    },
    [fetchTodo.rejected]: state => {
      state.todo = [];
      state.status = 'error';
    },
  },
});

export const {addTodo, deleteTodo} = todoSlice.actions;

export const selectTodo = state => state.posts;

export default todoSlice.reducer;
