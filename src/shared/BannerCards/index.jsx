import React from "react";
import {
  Search,
  ChevronDown,
  UserRound,
  Heart,
  RefreshCcw,
  ShoppingCart,
  MoveRight,
} from "lucide-react";
import styles from "./style.module.scss";
import { clsx } from "clsx";

const BannerCards = ({ image, title, category, name, className = "" }) => {
  return (
    <div className={clsx(styles.left)}>
      <div className={clsx(styles.boxImg, "relative w-full h-full")}>
        <img
          className={clsx(styles.img, "w-full h-auto object-cover")}
          src={image}
          alt=""
        />

        <div
          className={
            "flex flex-col gap-2  top-6 left-6 sm:top-10 sm:left-10 max-w-[80%] r"
          }
        >
          <div className={`${className}`}>
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
              {title}
            </h2>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug">
              {name}
            </h3>
            <h4 className="text-sm sm:text-base text-gray-300">{category}</h4>
            <button className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm">
              Shop Now <MoveRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerCards;
