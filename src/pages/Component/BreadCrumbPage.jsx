import React from "react";
import Breadcrumb from "../../components/Breadcrumb";

const BreadCrumbPage = () => {
  return (
    <div className="bg-main z-19">
      <div className=" mx-8 py-6">
        <h2 className="text-4xl font-bold text-slate-50">
          Tailwind CSS Breadcrumb
        </h2>
        <p className="text-xl font-semibold text-slate-400 py-2">
          Show the location of the current page in a hierarchical structure
          using the Tailwind CSS breadcrumb component.
        </p>

        <h2 className="text-3xl font-semibold text-slate-50">
          Default breadcrumb
        </h2>
      </div>
      <div className="text-cyan-400 w-2/3 m-auto bg-trasparent border-2 p-5 rounded-xl">
        <Breadcrumb />
      </div>
    </div>
  );
};

export default BreadCrumbPage;
