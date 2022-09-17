import React from 'react';
import Button from '../../Button';
import TodolistItem from '../../TodolistItem';
import styles from './Todolist.module.css';

const Todolist = () => {
  return (
    <div className={styles['todolist-frame']}>
      <TodolistItem />
      <TodolistItem />
      <TodolistItem />
      <TodolistItem />
      <TodolistItem />
      <TodolistItem />
      <TodolistItem />
      <TodolistItem />
    </div>
  );
};

export default Todolist;
