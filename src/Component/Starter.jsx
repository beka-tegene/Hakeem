import React from "react";
import style from "./Starter.module.css";
// import logo from "../img/Mask group.svg";
const Starter = () => {
  return (
    <div className={style.container}>
      <div className={style.start}>
        <div className={style.bg}></div>
        <div className={style.imgs}>
          <div className={style.img} />
          <div className={style.img2}/>
          <h2 contentEditable>text</h2>
        </div>
      </div>
    </div>
  );
};

export default Starter;
