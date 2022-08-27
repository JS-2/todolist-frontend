import React, { useEffect, useState } from 'react';
import styles from './Title.module.css';

const Title = (props) => {
  const [titleNoticeCssArr, setTitleNoticeCssArrArr] = useState([
    styles['title-notice'],
  ]);

  useEffect(() => {
    switch (props.state) {
      case 'DOING':
        setTitleNoticeCssArrArr([
          styles['title-notice'],
          styles['title-notice-doing'],
        ]);
        break;

      default:
        setTitleNoticeCssArrArr([styles['title-notice']]);
    }
  }, [props.state]);

  return (
    <div>
      <div className={styles['title-main-title']}>2022년 8월 13일</div>
      <div className={styles['title-subtitle']}>화요일</div>
      <div className={titleNoticeCssArr.join(' ')}>할일 2개 남음</div>
    </div>
  );
};

export default Title;
