import React from 'react';
import Button from '../../Button';
import styles from './Checklist.module.css';

const Checklist = () => {
  const clickEventHandler = () => {
    console.log(this.styles['common-button']);
  };
  return (
    <div>
      <Button data={{ todoState: 'DOING', content: 'Todolist 내용1' }} />
      <Button data={{ todoState: 'COMPLETE', content: 'Todolist 내용2' }} />
    </div>
  );
};

export default Checklist;
