import React from 'react';
import Card from '../Card/Card';
import Checklist from './Checklist';
import Title from './Title';

const TodolistCard = () => {
  return (
    <div>
      <Card
        topContent={<Title state="DOING" />}
        bottomContent={<Checklist />}
      />
    </div>
  );
};

export default TodolistCard;
