import React from "react";
import styles from "./style.module.scss";
import { clsx } from "clsx";

const MemberPanel = () => {
  return (
    <div className="container mx-auto px-10">
      <div
        className={clsx(
          styles.headText,
          "flex flex-col  items-center justify-center my-30"
        )}
      >
        <h1 className="text-[96px] font-extrabold bg-[url(https://klbtheme.com/fynode/wp-content/uploads/2024/12/download.png)] bg-bg-cover bg-fixed text-transparent bg-clip-text">
          Unleash the Power of
        </h1>
        <h2 className="text-[96px] font-extrabold bg-[url(https://klbtheme.com/fynode/wp-content/uploads/2024/12/download.png)] bg-bg-cover bg-fixed text-transparent bg-clip-text">
          Perfect Sound
        </h2>
        <h3 className="font-light text-[23px] text-[#5D6063]">
          Fynode: Where Modern Technology Meets Everyday Excellence
        </h3>
        <div className="grid grid-cols-2 my-20 gap-10">
          <div className="left flex items-center justify-center  border-r-1 p-10 border-o">
            <ul className="flex flex-col items-center justify-center gap-2.5">
              <li className="text-[#212529] text-[80px] font-bold leading-[1.1]">
                1.5k
              </li>
              <li className="text-[#212529] text-[30px] font-semibold">
                Happy Customers
              </li>
              <li className="font-light text-[13px] text-[#212529] text-center">
                Ut sit amet aliquam libero. Vestibulum ut consectetur orci.
                Pellentesque nunc <br /> sem, consequat non blandit non dictum a
                mauris.
              </li>
            </ul>
          </div>
          <div className="right flex items-center justify-center p-10">
            <ul className="flex flex-col items-center justify-center gap-2.5">
              <li className="text-[#212529] text-[80px] font-bold leading-[1.1]">
                300k
              </li>
              <li className="text-[#212529] text-[30px] font-semibold">
              Total Sales per Month
              </li>
              <li className="font-light text-[13px] text-[#212529] text-center">
                Ut sit amet aliquam libero. Vestibulum ut consectetur orci.
                Pellentesque nunc <br /> sem, consequat non blandit non dictum a
                mauris.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberPanel;
