import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import { toggleComplete, deleteTodo, removeCompleted } from '../features/todo/todoSlice';
import { List, Button } from 'antd';
import Todo from './Todo';

const TodoList: React.FC = () => {
  const { todos, filter } = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'all') return true;
    if (filter === 'completed') return todo.completed;
    if (filter === 'active') return !todo.completed;
    return true;
  });

  const handleRemoveCompleted = () => {
    dispatch(removeCompleted());
  };

  return (
    <>
      <List
        style={{ marginTop: '20px' }}
        bordered
        dataSource={filteredTodos}
        renderItem={(todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            toggleComplete={() => dispatch(toggleComplete(todo.id))}
            deleteTodo={() => dispatch(deleteTodo(todo.id))}
          />
        )}
      />
      <Button type="primary" onClick={handleRemoveCompleted} style={{ marginTop: '10px' }}>
        Remove Completed Tasks
      </Button>
    </>
  );
};

export default TodoList;