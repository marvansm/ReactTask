import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
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
import ProductCards from "../../shared/ProductCards";
import { ApiServices } from "../../services/Api";

const ProductsSection = () => {
  const Apidata = new ApiServices();

  const [Data, SetData] = useState([]);

  useEffect(() => {
    Apidata.getApiData("products").then((res) => {
      SetData(res);
    });
  }, []);

  return (
    <div className={clsx(styles.products, "container mx-auto px-10")}>
      <div className="header-text flex items-center gap-8">
        <h2 className="text-[40px] font-medium">Most sold this week</h2>
        <ul className="flex items-center gap-4 font-medium text-[22px]">
          <li className="text-[#000]">Earphones</li>
          <li className="text-[#ccc]">Microphones</li>
          <li className="text-[#ccc]">Smartwatches</li>
          <li className="text-[#ccc]">Speakers</li>
        </ul>
      </div>
      <div className="grid grid-cols-3 gap-8">
        {Data &&
          Data.slice(0, 3).map((item, index) => (
            <ProductCards
              key={index}
              image={item.img}
              hoverImg={item.hoverimg}
              title={item.title}
              oldPrice={item.oldPrice}
              currentPrice={item.newPrice}
              category={item.category}
            />
          ))}
      </div>
    </div>
  );
};

export default ProductsSection;
