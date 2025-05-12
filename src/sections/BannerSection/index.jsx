import React from "react";
import BannerCards from "../../shared/BannerCards";
import styles from "../BannerSection/style.module.scss";
import { clsx } from "clsx";
const BannerSection = () => {
  return (
    <div className="container mx-auto px-10">
      <div className="grid grid-cols-2 gap-10">
        <BannerCards
          className={clsx(styles.Istop)}
          image={
            "https://klbtheme.com/fynode/wp-content/uploads/2024/12/banner-06.jpg"
          }
          title={"Elite Quality"}
          name={"Where Excellence Meets Deep Resonance"}
          category={"Fynode: Redefining Modern Tech"}
        />
        <BannerCards
        className={clsx(styles.Isbottom)}
          image={
            "https://klbtheme.com/fynode/wp-content/uploads/2024/12/banner-05.jpg"
          }
          title={"Elite Quality"}
          name={"Where Creativity Meets Premium Sound"}
          category={"Fynode: Redefining Modern Tech"}
        />
      </div>
    </div>
  );
};

export default BannerSection;
