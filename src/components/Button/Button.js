import React, { useEffect, useState } from 'react';
import styles from './Button.module.css';

const Button = (props) => {
  const [cssArr, setCssArr] = useState([styles['common-button']]);
  const [data, setData] = useState();

  /** 
  props data값 state 초기화
  */
  useEffect(() => {
    setData(props.data);
  }, [props.data]);

  /** 
  todoState 상태값 변경 CSS
  DOING: 진행중
  COMPLETE: 완료
  */
  useEffect(() => {
    if (data === undefined) return;

    switch (data.todoState) {
      case 'COMPLETE':
        setCssArr([styles['common-button'], styles['common-button-complete']]);
        break;

      default:
        setCssArr([styles['common-button']]);
    }
  }, [data]);

  /** 
   버튼 클릭 이벤트
   비동기 통신 추가예정
  */
  const ButtonClickEventHandler = () => {
    switch (data.todoState) {
      case 'COMPLETE':
        data.todoState = 'DOING';
        break;

      default:
        data.todoState = 'COMPLETE';
    }
    setData({ ...data, todoState: data.todoState });
  };

  return (
    <button className={cssArr.join(' ')} onClick={ButtonClickEventHandler}>
      {props.data.content}
    </button>
  );
};

export default Button;
