import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import renderWithRedux from '../utils/test-utils';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

describe('Todo components', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), 
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });
  
  it('renders TodoList and shows todos', async () => {
    const initialState = {
      todo: {
        todos: [{ id: '110ec58a-a0f2-4ac4-8393-c866d813b8d1', text: 'Test Todo', completed: false }],
        filter: 'all' as 'all' | 'completed' | 'active',
      },
    };
    renderWithRedux(<TodoList />, { initialState });
    const todoElement = await screen.findByText(/Test Todo/i); 
  });

  it('allows toggling and deleting todos', async () => {
    const initialState = {
      todo: {
        todos: [{ id: '110ec58a-a0f2-4ac4-8393-c866d813b8d1', text: 'Test Todo', completed: false }],
        filter: 'all' as 'all' | 'completed' | 'active',
      },
    };
    renderWithRedux(<TodoList />, { initialState });
    fireEvent.click(screen.getByText('Complete'));
    const undoElement = await screen.findByText('Undo'); 
    
    fireEvent.click(screen.getByText('Delete'));
    const deletedTodoElement = await screen.queryByText(/Test Todo/i);
    expect(deletedTodoElement).not.toBeInTheDocument();
  });
});
