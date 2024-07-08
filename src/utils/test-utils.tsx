import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import todoReducer, { TodoState } from '../features/todo/todoSlice';

const renderWithRedux = (
  component: ReactNode,
  {
    initialState,
    store = configureStore({ reducer: { todo: todoReducer }, preloadedState: initialState }),
  }: { initialState?: { todo: TodoState }; store?: any } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

export default renderWithRedux;
