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

const DetailCard = () => {
  return (
    <div className="container mx-auto px-10">
      <div className="flex gap-10 items-center mt-16">
        <h1 className="text-[2.5rem] font-medium ">Capture Every Detail</h1>
        <h2 className="text-[18px] text-[#646769]">
          Capture every nuance of your voice with this high-performance
          microphone.
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-10 my-8">
        <div className="box rounded-[15px] overflow-hidden">
          <div className={clsx(styles.boxImg, "relative")}>
            <img
              src="https://klbtheme.com/fynode/wp-content/uploads/2024/12/collection-earhphones.jpg"
              alt=""
            />
            <div
              className={clsx(
                styles.boxBody,
                " absolute bottom-[10px] left-[10px]"
              )}
            >
              <h2>
                Discover exclusive <br /> collaborations
              </h2>
              <h3>Fynode: Innovation in Every Detail</h3>
              <button className="flex gap-3 duration-75">
                Shop Now <MoveRight />
              </button>
            </div>
          </div>
        </div>
        <div className="box rounded-[15px] overflow-hidden">
          <div className={clsx(styles.boxImg, "relative")}>
            <img
              src="https://klbtheme.com/fynode/wp-content/uploads/2024/12/collection-headphones.jpg"
              alt=""
            />
            <div
              className={clsx(
                styles.boxBody,
                " absolute bottom-[10px] left-[10px]"
              )}
            >
              <h2>
              Showcasing Iconic <br /> Collaborations
              </h2>
              <h3>Fynode: Innovation in Every Detail</h3>
              <button className="flex gap-3 duration-75">
                Shop Now <MoveRight />
              </button>
            </div>
          </div>
        </div>
        <div className="box rounded-[15px] overflow-hidden">
          <div className={clsx(styles.boxImg, "relative")}>
            <img
              src="https://klbtheme.com/fynode/wp-content/uploads/2024/12/collection-speakers.jpg"
              alt=""
            />
            <div
              className={clsx(
                styles.boxBody,
                " absolute bottom-[10px] left-[10px]"
              )}
            >
              <h2>
              Celebrating Unique <br /> Synergies
              </h2>
              <h3>Fynode: Innovation in Every Detail</h3>
              <button className="flex gap-3 duration-75">
                Shop Now <MoveRight />
              </button>
            </div>
          </div>
        </div>
     
      </div>
    </div>
  );
};

export default DetailCard;
