// src/components/Filter.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../features/todo/todoSlice';
import { RootState } from '../app/store';
import { Radio } from 'antd';

const Filter: React.FC = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.todo.filter);

  const handleFilterChange = (e: any) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Radio.Group onChange={handleFilterChange} value={filter}>
      <Radio.Button value="all">All</Radio.Button>
      <Radio.Button value="active">Active</Radio.Button>
      <Radio.Button value="completed">Completed</Radio.Button>
    </Radio.Group>
  );
};

export default Filter;
