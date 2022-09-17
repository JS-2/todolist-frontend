import React, { useEffect, useState } from 'react';
import styles from './Button.module.css';

const Button = () => {
  const [cssArr, setCssArr] = useState([styles['common-button']]);

  return <button className={cssArr.join(' ')}>asdasd</button>;
};

export default Button;
