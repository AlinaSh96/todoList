import React from 'react';
import { Layout, Typography } from 'antd';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import Filter from './components/Filter';
import { useSelector } from 'react-redux';
import { RootState } from './app/store';

const { Header, Content } = Layout;
const { Title, Text } = Typography;

const App: React.FC = () => {
  const totalTodos = useSelector((state: RootState) => state.todo.todos.length);
  const completedTodos = useSelector((state: RootState) =>
    state.todo.todos.filter((todo) => todo.completed).length
  );

  return (
    <Layout style={{ minHeight: '100vh' }} data-testid="app-container">
      <Header style={{ background: '#fff', padding: '0 20px' }}>
        <Title level={2}>Todo List</Title>
      </Header>
      <Content style={{ padding: '20px' }}>
        <Text>
          Total Tasks: {totalTodos} | Completed Tasks: {completedTodos}
        </Text>
        <TodoForm />
        <Filter />
        <TodoList />
      </Content>
    </Layout>
  );
};

export default App;
