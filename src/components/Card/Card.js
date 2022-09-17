import React from 'react';
import Button from '../Button';
import styles from './Card.module.css';

const Card = (props) => {
  return (
    <div className={styles['common-card-frame']}>
      <div className={styles['common-card-top']}>{props.topContent}</div>
      <hr className={styles['common-card-divider']} />
      <div className={styles['common-card-bottom']}>{props.bottomContent}</div>
    </div>
  );
};

export default Card;
