import React from "react";
import styles from "./style.module.scss"
import { clsx } from "clsx";


const CategoryCards = ({ image, title, stock }) => {
  
  return (
    <div className={clsx(styles.box,"box bg-[#F4F4F5] p-6 flex flex-col items-start rounded-3xl overflow-hidden w-[100%] gap-2.5")}>
      <div className="boxTitle">
        <h2 className="title text-[24px] font-semibold">{title}</h2>
        <h3 className="text-[13px] text-[#868484]">{stock}</h3>
      </div>
      <div className="box-img">
        <img  src={image} alt="" />
      </div>
      <button >View Products</button>
    </div>
  );
};

export default CategoryCards;
