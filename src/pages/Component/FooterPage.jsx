import React from "react";
import Footer from "../../components/Footer";

const FooterPage = () => {
  return (
    <div className="bg-main z-19">
      <div className=" mx-8 py-6">
        <h2 className="text-4xl font-bold text-slate-50">
          Tailwind CSS Footer
        </h2>
        <p className="text-xl font-semibold text-slate-400 py-2">
          Tailwind CSS Footer - Tailwind Use the footer section at the bottom of
          every page to show valuable information to your users, such as sitemap
          links, a copyright notice, and a logo
        </p>

        <h2 className="text-3xl font-semibold text-slate-50">
          Default Footer
        </h2>
      </div>
      <div className="text-cyan-400 w-2/3 m-auto bg-trasparent border-2 p-5 rounded-xl">
        <Footer />
      </div>
    </div>
  );
};

export default FooterPage;
