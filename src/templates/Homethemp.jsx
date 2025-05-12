import React from "react";
import BannerSection from "../sections/BannerSection";
import DetailSection from "../sections/DetailSection";
import MemberPanel from "../sections/MemberPanel";
import PopularSection from "../sections/PopularSection";
import ProductsSection from "../sections/ProductsSection";
import NewsSection from "../sections/NewsSection";

const HomeThemp = () => {
  return (
    <div>
      <BannerSection />
      <DetailSection />
      <MemberPanel />
      <PopularSection />
      <ProductsSection />
      <NewsSection />
    </div>
  );
};

export default HomeThemp;
