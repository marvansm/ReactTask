import React, { useEffect, useState } from "react";
import { ApiServices } from "../../services/Api";
import BannerCards from "../../shared/BannerCards";
import styles from "../NewsSection/style.module.scss";
import { clsx } from "clsx";
import CategoryCards from "../../shared/CategoryCards";

const NewsSection = () => {
  const Apidata = new ApiServices();

  const [Data, SetData] = useState([]);

  useEffect(() => {
    Apidata.getApiData("category").then((res) => {
      SetData(res);
    });
  }, []);
  return (
    <div className="container mx-auto px-10 my-25">
      <div>
        <BannerCards
          className={clsx(styles.IsCenter)}
          image={
            "https://klbtheme.com/fynode/wp-content/uploads/2024/12/banner-02.jpg"
          }
          title={"Elite Quality"}
          name={"Elevate Your Audio Experience with Sony Headphones"}
          category={"Fynode: Redefining Modern Tech"}
        />
        <div className=" text-center flex justify-center flex-col gap-4 my-15">
          <h3 className="text-[36px] font-medium text-[#212529] font-inter leading-relaxed ">
            "The design is spectacular, the fit is precise, the ANC <br /> is
            industry-leading, the battery life is fantastic, and <br />
            the audio is clear and powerful."
          </h3>
          <h4 className="text-[14px] font-inter text-gray-500 ">
            Jessica Lindström
          </h4>
        </div>
      </div>
      <div className="mt-20 grid grid-cols-4 gap-10">
        {Data &&
          Data.map((item, index) => (
            <CategoryCards
              key={index}
              image={item.img}
              title={item.title}
              stock={item.stock}
            />
          ))}
      </div>
      <div
        className="services grid grid-cols-4 mt-15 border-t-1
      border-y-zinc-400 pt-20"
      >
        <div className="box flex items-start gap-2.5">
          <img
            className="object-contain"
            width={50}
            height={50}
            src="https://klbtheme.com/fynode/wp-content/uploads/2024/12/footer.png"
            alt=""
          />
          <div className="content">
            <h2 className="title text-[17px] font-semibold">
              Customer service
            </h2>
            <h3 className="text-[14px] font-normal">
              It’s not actually free we just price it into the products.
            </h3>
          </div>
        </div>
        <div className="box flex items-start gap-2.5">
          <img
            className="object-contain"
            width={50}
            height={50}
            src="https://klbtheme.com/fynode/wp-content/uploads/2024/12/footer2.png"
            alt=""
          />
          <div className="content">
            <h2 className="title text-[17px] font-semibold">
              Fast Free Shipping
            </h2>
            <h3 className="text-[14px] font-normal">
              It’s not actually free we just price it into the products.
            </h3>
          </div>
        </div>
        <div className="box flex items-start gap-2.5">
          <img
            className="object-contain"
            width={50}
            height={50}
            src="https://klbtheme.com/fynode/wp-content/uploads/2024/12/footer3.png"
            alt=""
          />
          <div className="content">
            <h2 className="title text-[17px] font-semibold">
              Returns & Exchanges
            </h2>
            <h3 className="text-[14px] font-normal">
              It’s not actually free we just price it into the products.
            </h3>
          </div>
        </div>
        <div className="box flex items-start gap-2.5">
          <img
            className="object-contain"
            width={50}
            height={50}
            src="https://klbtheme.com/fynode/wp-content/uploads/2024/12/footer4.png"
            alt=""
          />
          <div className="content">
            <h2 className="title text-[17px] font-semibold">Secure payment</h2>
            <h3 className="text-[14px] font-normal">
              It’s not actually free we just price it into the products.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
