import React from 'react';
import { List, Button } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

interface TodoProps {
  todo: TodoItem;
  toggleComplete: (id: string) => void;
  deleteTodo: (id: string) => void;
}

interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
}

const Todo: React.FC<TodoProps> = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <List.Item
      actions={[
        <Button
          type="link"
          icon={<CheckOutlined />}
          onClick={() => toggleComplete(todo.id)}
        >
          {todo.completed ? 'Undo' : 'Complete'}
        </Button>,
        <Button type="link" icon={<CloseOutlined />} onClick={() => deleteTodo(todo.id)} danger>
          Delete
        </Button>,
      ]}
      style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
    >
      {todo.text}
    </List.Item>
  );
};

export default Todo;