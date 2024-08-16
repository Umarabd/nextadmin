import React from "react";
import style from "./card2.module.css";
import { MdSupervisedUserCircle } from "react-icons/md";
const Card2 = () => {
  return (
    <div className={style.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={style.text}>
        <span className={style.title}> Total Users</span>
        <span className={style.number}>10.000</span>
        <span className={style.detail}>
          <span className={style.positive}>12%</span> more than yesterday
        </span>
      </div>
    </div>
  );
};

export default Card2;
