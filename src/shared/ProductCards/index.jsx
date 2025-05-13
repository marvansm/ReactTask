import React, { useEffect, useState } from "react";
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
  PanelRightCloseIcon,
} from "lucide-react";
import DetailSection from "../../sections/DetailSection";
import Payment from "../Payment";
import { ApiServices } from "../../services/Api";

const ProductCards = ({
  image,
  hoverImg,
  category,
  title,
  oldPrice,
  currentPrice,
  className = "",
}) => {
  const DataApi = new ApiServices();
  const [IdData, SetIdData] = useState(null);
  const [OpenModal, SetOpenModal] = useState(false);
  useEffect(() => {
    DataApi.getApibyId("products", IdData).then((res) => {
      SetIdData(res);
    });
  }, [IdData]);
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
          <button onClick={() => SetOpenModal(true)}>
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
      {OpenModal && (
        <div className="fixed inset-0 z-[99999] bg-[#00000075] flex items-center justify-center">
          <div className="modalPage bg-white w-[1100px] h-[600px] rounded-lg shadow-lg relative">
            <button
              onClick={() => SetOpenModal(false)}
              className="absolute top-2.5 right-2.5 cursor-pointer"
            >
              <PanelRightCloseIcon />
            </button>
            <div className="grid grid-cols-2 p-10 gap-13 overflow-hidden">
              <div className="left rounded-2xl overflow-hidden object-cover w-[400px] h-[500px]">
                <img
                  className="w-full h-full object-cover"
                  src="https://klbtheme.com/fynode/wp-content/uploads/2024/12/01-14.jpg"
                  alt=""
                />
              </div>
              <div className="right overflow-hidden">
                <Payment
                  title={"Earphones"}
                  name={"Soundcore P30i True Wireless ANC Earbud"}
                  price={"24.99"}
                  oldprice={"44.77"}
                  features={
                    "Immerse yourself in premium sound with the Soundcore P30i, featuring advanced active noise cancellation, crystal-clear audio, and ergonomic design for a comfortable listening experience."
                  }
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCards;
