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
import { clsx } from "clsx";
import styles from "./style.module.scss";
import ProductCards from "../../shared/ProductCards";

const PopularSection = () => {
  return (
    <div className="container mx-auto px-10 my-5">
      <div className={clsx(styles.box, "overflow-hidden")}>
        <div className="box-img relative">
          <video
            autoPlay
            muted
            loop
            className="w-[100%] h-[100%]"
            src="https://klbtheme.com/fynode/wp-content/uploads/2024/12/video-07.mp4"
          ></video>
          <ProductCards
            className="absolute top-40 right-20 w-[400px] h-auto"
            image={
              "https://klbtheme.com/fynode/wp-content/uploads/2024/12/01-51.jpg"
            }
            hoverImg={
              "https://klbtheme.com/fynode/wp-content/uploads/2024/12/02-45.jpg"
            }
            title={"Wireless Gaming Headphones MS920"}
            category={"Headphones"}
            currentPrice={85}
          />
          <div className="pos-el absolute bottom-20 left-12 flex flex-col gap-1.5">
            <h2 className="text-[56px] font-medium leading-[1.375] text-[#fff]">
              Relish the Resonance of <br /> Refined Headphone
            </h2>
            <h3 className="text-[#ffffff7d] text-[18px]">
              Experience unmatched audio clarity with crafted headphones.
            </h3>
            <button className="flex gap-1 items-center text-[#fff] pt-2.5">
              Shop Now <MoveRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularSection;
