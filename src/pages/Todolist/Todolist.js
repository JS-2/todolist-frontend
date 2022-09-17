import React from 'react';
import TodolistCard from '../../components/TodolistCard/TodolistCard';
import styles from './Todolist.module.css';

const Todolist = () => {
  return (
    <>
      <div>로그인</div>
      <div className={styles['todolist-page']} style={{}}>
        <TodolistCard />
      </div>
    </>
  );
};

export default Todolist;
