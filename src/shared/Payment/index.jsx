import React from "react";
import {
  Search,
  ChevronDown,
  UserRound,
  Heart,
  RefreshCcw,
  ShoppingCart,
  MoveRight,
  Star,
  ShoppingCartIcon,
  Minus,
  Plus,
  GitCompare,
  MessageCircleQuestion,
  Box,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";
import styles from "./style.module.scss";
import { clsx } from "clsx";
const Payment = ({ title, name, price, oldprice, features }) => {
  return (
    <div className={clsx(styles.paymentCard)}>
      <h2 className="title text-[13px] text-[#717AA9]">{title}</h2>
      <h3 className="name text-[40px] font-medium text-[#212529] w-[700px]">
        {name}
      </h3>
      <div className="rating flex items-center gap-6 ">
        <ul className="flex items-center gap-1 ">
          <li>
            <Star size={14} fill="black" />
          </li>
          <li>
            <Star size={14} fill="black" />
          </li>
          <li>
            <Star size={14} fill="black" />
          </li>
          <li>
            <Star size={14} fill="black" />
          </li>
          <li>
            <Star size={14} fill="black" />
          </li>
          <li>3</li>
        </ul>
        <p className="text-[13px]">
          <span className="text-[#717AA9]">SKU:</span> B3C4D5A6
        </p>
      </div>
      <div className=" mt-3 border border-black/10"></div>
      <div className="price flex justify-between items-center my-6">
        <ul className="flex items-center gap-2.5">
          <li className="current text-[22px] text-[#212529]">${price}</li>
          <li className="old text-[#A4A1AA] text-[22px]">${oldprice}</li>
        </ul>
        <p className="font-medium text-[14px]">In Stock</p>
      </div>
      <p className="features text-[#52525b] text-[14px] w-[700px]">
        {features}
      </p>
      <button className="bg-[#fff1e6] text-[#f36507] flex items-center w-[100%] t-[13px] mb-4 mt-6 py-[12px] px-[15px] gap-1.5 rounded-xl">
        <ShoppingCartIcon size={16} /> This product has been added to{" "}
        <span className="font-semibold t-[13px]">2 people's</span> carts.
      </button>
      <div className="addCard flex gap-5">
        <ul className="border border-black/10 flex items-center w-[100px] justify-between py-3 px-2 rounded-2xl">
          <li>
            <Minus size={16} />
          </li>
          <li>0</li>
          <li>
            <Plus size={16} />
          </li>
        </ul>
        <button className="bg-[#000] text-[#fff] w-[100%] rounded-3xl py-3 px-2 cursor-pointer hover:bg-[#000000dd] ">
          Add To Card
        </button>
      </div>
      <div className="buy flex items-center my-5 gap-3">
        <button className="bg-[#e4e4e7] text-[#000] w-[100%] rounded-3xl py-3 px-2 cursor-pointer duration-200 hover:bg-[#a8a8aa]">
          Buy Now
        </button>
        <ul className="flex items-center gap-2">
          <li className="w-[50px] h-[50px] border border-black/25 rounded-full flex items-center justify-center">
            <Heart />
          </li>
          <li className="w-[50px] h-[50px] border border-black/25 rounded-full flex items-center justify-center">
            <GitCompare />
          </li>
        </ul>
      </div>
      <div className="share flex justify-between items-center my-5">
        <ul className="flex items-center gap-2.5">
          <li className="flex items-center gap-2.5">
            <MessageCircleQuestion size={17} /> Ask a question
          </li>
          <li className="flex items-center gap-2.5">
            <Box size={17} /> Delivery Return
          </li>
        </ul>
        <ul className="flex items-center gap-4.5">
          <li className="text-[#9FA09D]">Share :</li>
          <li>
            <Facebook size={17} fill="black" />
          </li>
          <li>
            <Twitter size={17} fill="black" />
          </li>
          <li>
            <Linkedin size={17} fill="black" />
          </li>
          <li>
            <Youtube size={17} />
          </li>
        </ul>
      </div>
      <div className=" mt-3 border border-black/10"></div>
      <div className="highlights my-6 flex flex-col items-start">
        <h2 className="text-[18px] font-semibold mb-3">Product Highlights</h2>
        <ul className="list-disc text-[14px]">
          <li>
            Active Noise Cancellation: Blocks out background noise for focused
            listening.
          </li>
          <li>
            Rich Sound Quality: Delivers deep bass and clear highs for immersive
            audio.
          </li>
          <li>Long Battery Life: Up to 28 hours with the charging case.</li>
          <li>Ergonomic Fit: Lightweight and comfortable for all-day wear.</li>
        </ul>
      </div>
    </div>
  );
};



export default Payment;
