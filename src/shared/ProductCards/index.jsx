import React from "react";
import styles from "./style.module.scss";
import { clsx } from "clsx";
import { Link } from "react-router-dom";
import {
  Search,
  ChevronDown,
  UserRound,
  Heart,
  RefreshCcw,
  ShoppingCart,
  MoveRight,
  Star,
  Eye,
  GitCompare,
} from "lucide-react";
import DetailSection from "../../sections/DetailSection";

const ProductCards = ({
  image,
  hoverImg,
  category,
  title,
  oldPrice,
  currentPrice,
  className = "",
}) => {
  return (
    <div className={`${className}`}>
      <div
        className={clsx(
          styles.box,
          " rounded-2xl overflow-hidden relative w-[100%] h-[100%] mt-5 "
        )}
      >
        <span
          className={clsx(
            styles.posIcon,
            "posIcon absolute bottom-40 right-15"
          )}
        >
          <Heart />
        </span>
        <div className="defaultIcon flex items-center justify-between absolute top-2.5 left-2.5 w-[96%] z-50">
          <button className="discount bg-[#000] text-[#fff] p-1 pl-2 pr-2 rounded-[10px]">
            45%
          </button>
          <button
            className={clsx(
              styles.rating,
              "rating flex items-center  bg-[#fff] text-[#000] p-1 pl-2 pr-2 rounded-[10px]"
            )}
          >
            <Star size={18} color="gold" fill="gold" />
            4.33
          </button>
        </div>
        <div
          className={clsx(
            styles.addtocard,
            "addtocard absolute z-50 bottom-[30%]  right-[0%] w-[300px]"
          )}
        >
          <button className="bg-[#000] text-[#fff] p-3 rounded-3xl ">
            Add To Card
          </button>
        </div>
        <div
          className={clsx(
            styles.hoverIcon,
            "absolute right-7 top-8 flex flex-col gap-4 z-50"
          )}
        >
          <button>
            <Eye size={19} />
          </button>
          <button>
            <GitCompare size={19} />
          </button>
        </div>
        <div className={clsx(styles.hoverImg)}>
          <Link to={"/detail"}>
            <img src={hoverImg} alt="" />
          </Link>
        </div>
        <div className={(styles.boxImg, "z-30 ")}>
          <Link to={"/detail"}>
            <img src={image} alt="" />
          </Link>
        </div>

        <div className="boxBody bg-[#F4F4F5] px-9 h-[100%]">
          <h2 className="category text-[13px] text-[#71717a] flex justify-between">
            {category}
          </h2>
          <h3 className="title text-[18px] text-[#212529] leading-[1.55] font-semibold w-[350px]">
            {title}
          </h3>
          <div className="price flex gap-2 items-center">
            <span className="current text-[15px]">${currentPrice}</span>
            <span className="old text-[15px] line-through text-[#818181]">
              {oldPrice}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
