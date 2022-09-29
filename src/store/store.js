import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import todoReducer from './slices/todo.js';

const rootReducer = combineReducers({todoReducer});

export const store = configureStore({
  reducer: rootReducer,
});
