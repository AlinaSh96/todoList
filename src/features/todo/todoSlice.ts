import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid'; 

export interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
}

export interface TodoState {
  todos: TodoItem[];
  filter: 'all' | 'completed' | 'active';
}

const initialState: TodoState = {
  todos: [],
  filter: 'all',
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: TodoItem = {
        id: uuidv4(), 
        text: action.payload,
        completed: false,
      };
      state.todos.push(newTodo);
    },
    toggleComplete: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    setFilter: (state, action: PayloadAction<'all' | 'completed' | 'active'>) => {
      state.filter = action.payload;
    },
    removeCompleted: (state) => {
      state.todos = state.todos.filter((todo) => !todo.completed);
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo, setFilter, removeCompleted } = todoSlice.actions;

export default todoSlice.reducer;
