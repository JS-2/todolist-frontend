import React from "react";
import styles from "./Title.module.css";

const Title = () => {
  return (
    <div>
      <div className={styles["main-title"]}>2022년 8월 13일</div>
      <div className={styles["subtitle"]}>화요일</div>
      <div className={styles["notice"]}>할일 2개 남음</div>
    </div>
  );
};

export default Title;
