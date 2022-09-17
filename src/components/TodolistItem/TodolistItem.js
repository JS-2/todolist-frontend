import React, { useEffect, useState } from 'react';
import styles from './TodolistItem.module.css';
// import { ReactComponent as TrashCanIcon } from '../../assets/images/trash-can-Icon.svg';
import trashCanIcon from '../../assets/images/trash-can-Icon.svg';

const TodolistItem = () => {
  const [clicked, setClicked] = useState(false);
  const [cssArr, setCssArr] = useState([styles['todolist-item-content-card']]);

  const checkBoxClickHandler = (e) => {
    setClicked(!clicked);
  };

  useEffect(() => {
    if (clicked) {
      setCssArr([
        styles['todolist-item-content-card'],
        styles['todolist-item-content-card-checked'],
      ]);
    } else {
      setCssArr([styles['todolist-item-content-card']]);
    }
  }, [clicked]);
  return (
    <div className={styles['todolist-item-frame']}>
      <input
        className={styles['todolist-item-checkbox']}
        type="checkbox"
        checked={clicked}
        onClick={checkBoxClickHandler}
      />
      <div className={cssArr.join(' ')}>
        <div>내용입니다. </div>
        {/* <TrashCanIcon className={styles['todolist-delete']} fill="silver" /> */}
        <img className={styles['todolist-delete']} src={trashCanIcon} />
      </div>
    </div>
  );
};

export default TodolistItem;
