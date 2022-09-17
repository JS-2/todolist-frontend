import React from 'react';
import Card from '../Card/Card';
import Todolist from './Todolist';
import Title from './Title';
import Button from '../Button';

const TodolistCard = () => {
  return (
    <div>
      <Card topContent={<Title state="DOING" />} bottomContent={<Todolist />} />
    </div>
  );
};

export default TodolistCard;
