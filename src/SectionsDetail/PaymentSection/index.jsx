import React, { useEffect, useState } from "react";
import Payment from "../../shared/Payment";
import clsx from "clsx";
import styles from "./style.module.scss";
import ProductCards from "../../shared/ProductCards";
import { ApiServices } from "../../services/Api";

const PaymentSection = () => {
  const DataApi = new ApiServices();
  const [Opentap, SetopenTab] = useState("Description");
  const [Data, SetData] = useState([]);
  useEffect(() => {
    DataApi.getApiData("products").then((res) => {
      SetData(res);
    });
  }, []);

  return (
    <div className={clsx(styles.font, "container mx-auto px-10")}>
      <div className="grid grid-cols-2 gap-9">
        <div className="left flex flex-col gap-3">
          <div className="boxImg relative">
            <img
              src="https://klbtheme.com/fynode/wp-content/uploads/2024/12/01-45.jpg"
              alt=""
            />
            <button className="absolute top-2.5 left-2.5 bg-[#000] text-[#fff] py-1 px-4 rounded-2xl">
              40%
            </button>
          </div>
          <ul className="flex w-[200px] gap-4">
            <li className="border border-black/30 p-1">
              <img
                src="https://klbtheme.com/fynode/wp-content/uploads/2024/12/01-45.jpg"
                alt=""
              />
            </li>
            <li className="border border-black/30 p-1">
              <img
                src="https://klbtheme.com/fynode/wp-content/uploads/2024/12/01-45.jpg"
                alt=""
              />
            </li>
            <li className="border border-black/30 p-1">
              <img
                src="https://klbtheme.com/fynode/wp-content/uploads/2024/12/01-45.jpg"
                alt=""
              />
            </li>
          </ul>
        </div>
        <div className="right">
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
      <div className="moreInfo">
        <div className="flex items-center gap-6 mt-23 font-medium text-[18px] border-b border-black/30  my-4">
          <button
            onClick={() => SetopenTab("Description")}
            className={`px-4 py-2 font-medium cursor-pointer h-[50px] ${
              Opentap === "Description"
                ? "border-b-2 border-black text-[#000]"
                : "text-gray-500"
            }`}
          >
            Description
          </button>
          <button
            onClick={() => SetopenTab("Specification")}
            className={`px-4 py-2 font-medium cursor-pointer h-[50px] ${
              Opentap === "Specification"
                ? "border-b-2 border-black text-[#000]"
                : "text-gray-500"
            }`}
          >
            Specification
          </button>
          <button
            onClick={() => SetopenTab("Reviews")}
            className={`px-4 py-2 font-medium cursor-pointer h-[50px] ${
              Opentap === "Reviews"
                ? "border-b-2 border-black text-[#000]"
                : "text-gray-500"
            }`}
          >
            Reviews (3)
          </button>
        </div>
        <div className="tabContent  min-h-[100px]">
          {Opentap === "Description" && (
            <p>
              Quisque varius diam vel metus mattis, id aliquam diam rhoncus.
              Proin vitae magna in dui finibus malesuada et at nulla. Morbi elit
              ex, viverra vitae ante vel, blandit feugiat ligula. Fusce
              fermentum iaculis nibh, at sodales leo maximus a. Nullam ultricies
              sodales nunc, in pellentesque lorem mattis quis. Cras imperdiet
              est in nunc tristique lacinia. Nullam aliquam mauris eu accumsan
              tincidunt. Suspendisse velit ex, aliquet vel ornare vel, dignissim
              a tortor. Morbi ut sapien vitae odio accumsan gravida. Morbi vitae
              erat auctor, eleifend nunc a, lobortis neque. Praesent aliquam
              dignissim viverra. Maecenas lacus odio, feugiat eu nunc sit amet,
              maximus sagittis dolor. Vivamus nisi sapien, elementum sit amet
              eros sit amet, ultricies cursus ipsum. Sed consequat luctus
              ligula. Curabitur laoreet rhoncus blandit. Aenean vel diam ut arcu
              pharetra dignissim ut sed leo. Vivamus faucibus, ipsum in
              vestibulum vulputate, lorem orci convallis quam, sit amet
              consequat nulla felis pharetra lacus. Duis semper erat mauris, sed
              egestas purus commodo vel.
            </p>
          )}
          {Opentap === "Specification" && (
            <table class=" w-[100%]">
              <thead>
                <tr>
                  <th class=" px-4 py-2 text-left">General</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th class="border-b border-black/30 px-4 py-2 text-left font-medium">
                    Alternate names
                  </th>
                  <td class="border-b border-black/30 px-4 py-2 font-medium">
                    {" "}
                    iPad 5
                  </td>
                </tr>
                <tr>
                  <th class="border-b border-black/30 px-4 py-2 text-left font-medium">
                    Brand
                  </th>
                  <td class="border-b border-black/30 px-4 py-2 font-medium">
                    Apple
                  </td>
                </tr>
                <tr>
                  <th class="font-medium border-b border-black/30 px-4 py-2 text-left">
                    Model
                  </th>
                  <td class="font-medium border-b border-black/30 px-4 py-2">
                    {" "}
                    iPad Air Wi-Fi + Cellular
                  </td>
                </tr>
                <tr>
                  <th class="font-medium border-b border-black/30 px-4 py-2 text-left">
                    Release date
                  </th>
                  <td class="font-medium border-b border-black/30 px-4 py-2">
                    September 2013
                  </td>
                </tr>
                <tr>
                  <th class="font-medium border-b border-black/30 px-4 py-2 text-left">
                    Dimensions (mm)
                  </th>
                  <td class="font-medium border-b border-black/30 px-4 py-2">
                    240.00 x 169.50 x 7.50
                  </td>
                </tr>
                <tr>
                  <th class="font-medium border-b border-black/30 px-4 py-2 text-left">
                    Weight (g)
                  </th>
                  <td class="font-medium border-b border-black/30 px-4 py-2">
                    478.00{" "}
                  </td>
                </tr>
                <tr>
                  <th class="font-medium border-b border-black/30 px-4 py-2 text-left">
                    Battery capacity (mAh)
                  </th>
                  <td class="font-medium border-b border-black/30 px-4 py-2">
                    8820
                  </td>
                </tr>
                <tr>
                  <th class="font-medium border-b border-black/30 px-4 py-2 text-left">
                    Removable battery
                  </th>
                  <td class="font-medium border-b border-black/30  px-4 py-2">
                    No
                  </td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
      </div>
      <div className="product mt-9">
        <h2 className="text-[18px] font-medium">Related products</h2>
        <div className="grid grid-cols-4 mb-15 gap-7">
          {Data &&
            Data.map((item, index) => (
              <ProductCards
                key={index}
                image={item?.img}
                hoverImg={item?.hoverimg}
                currentPrice={item?.newPrice}
                oldPrice={item?.oldPrice}
                title={item?.title}
                category={item?.category}
              />
            ))}
        </div>
        <div
          className="services grid grid-cols-4 mt-15 border-t-1
      border-y-zinc-400 py-10"
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
              <h2 className="title text-[17px] font-semibold">
                Secure payment
              </h2>
              <h3 className="text-[14px] font-normal">
                It’s not actually free we just price it into the products.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSection;
