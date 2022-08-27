import React from 'react';
import styles from './TrashCan.module.css';
import { ReactComponent as TrashCanIcon } from '../../assets/images/trash-can-Icon.svg';

const TrashCan = () => {
  return (
    <div className={styles['trash-can']}>
      <TrashCanIcon fill="silver" />
    </div>
  );
};

export default TrashCan;
