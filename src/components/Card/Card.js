import React from "react";
import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={styles["common-card-frame"]}>
      <div className={styles["common-card-top"]}>{props.topContent}</div>
      <hr className={styles["common-card-divider"]} />
      <div className={styles["common-card-top"]}>{props.bottomContent}</div>
    </div>
  );
};

export default Card;
