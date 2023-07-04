import React from "react";
import Banner from "../../components/Banner";

const BannerPage = () => {
  return (
    <div className="bg-main z-19">
      <div className=" mx-8 py-6">
        <h2 className="text-4xl font-bold text-slate-50">
          Tailwind CSS Sticky Banner
        </h2>
        <p className="text-xl font-semibold text-slate-400 py-2">
          Use the banner component to show marketing messages and CTA buttons at
          the top or bottom side of your website based on the utility classes
          from Tailwind CSS
        </p>
        <h2 className="text-3xl font-semibold text-slate-50">
        Default sticky banner
        </h2>
      </div>
      <div className="text-cyan-400 w-2/3 m-auto bg-trasparent border-2 p-5 rounded-xl">
      <Banner/>
      </div>
    </div>
  );
};

export default BannerPage;
