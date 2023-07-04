import React from "react";
import Pagination from "../../components/Pagination";

const PaginationPage = () => {
  return (
    <div className="bg-main z-19">
      <div className=" mx-8 py-6">
        <h2 className="text-4xl font-bold text-slate-50">
          Tailwind CSS Pagination
        </h2>
        <p className="text-xl font-semibold text-slate-400 py-2">
          Use the Tailwind CSS pagination element to indicate a series of
          content across various pages based on multiple styles and sizes
        </p>

        <h2 className="text-3xl font-semibold text-slate-50">
          Default Pagination
        </h2>
      </div>
      <div className="relative text-cyan-400 w-2/3 h-auto m-auto bg-trasparent border-2 p-5 rounded-xl">
        <Pagination />
      </div>
    </div>
  );
};

export default PaginationPage;
