import todoReducer, { addTodo, toggleComplete, deleteTodo, setFilter, removeCompleted, TodoState } from './todoSlice';

describe('todo reducer', () => {
  const initialState: TodoState = {
    todos: [],
    filter: 'all',
  };

  it('should handle initial state', () => {
    expect(todoReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle addTodo', () => {
    const actual = todoReducer(initialState, addTodo('Test Todo'));
    expect(actual.todos.length).toEqual(1);
    expect(actual.todos[0].text).toEqual('Test Todo');
  });

  it('should handle toggleComplete', () => {
    const stateWithTodo: TodoState = {
      ...initialState,
      todos: [{ id: "110ec58a-a0f2-4ac4-8393-c866d813b8d1", text: 'Test Todo', completed: false }],
    };
    const actual = todoReducer(stateWithTodo, toggleComplete("110ec58a-a0f2-4ac4-8393-c866d813b8d1"));
    expect(actual.todos[0].completed).toEqual(true);
  });

  it('should handle deleteTodo', () => {
    const stateWithTodo: TodoState = {
      ...initialState,
      todos: [{ id: "110ec58a-a0f2-4ac4-8393-c866d813b8d1", text: 'Test Todo', completed: false }],
    };
    const actual = todoReducer(stateWithTodo, deleteTodo("110ec58a-a0f2-4ac4-8393-c866d813b8d1"));
    expect(actual.todos.length).toEqual(0);
  });

  it('should handle setFilter', () => {
    const actual = todoReducer(initialState, setFilter('completed'));
    expect(actual.filter).toEqual('completed');
  });

  it('should handle removeCompleted', () => {
    const stateWithTodos: TodoState = {
      ...initialState,
      todos: [
        { id: "110ec58a-a0f2-4ac4-8393-c866d813b8d1", text: 'Test Todo 1', completed: true },
        { id: "110ec58a-a0f2-4ac4-8393-c866d813b8d2", text: 'Test Todo 2', completed: false },
      ],
    };
    const actual = todoReducer(stateWithTodos, removeCompleted());
    expect(actual.todos.length).toEqual(1);
    expect(actual.todos[0].id).toEqual("110ec58a-a0f2-4ac4-8393-c866d813b8d2");
  });
});
