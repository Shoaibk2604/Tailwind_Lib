import React from "react";
import DropDown from "../../components/DropDown";

const DropdownPage = () => {
  return (
    <div className="bg-main z-19">
      <div className=" mx-8 py-6">
        <h2 className="text-4xl font-bold text-slate-50">
        Tailwind CSS Dropdown
        </h2>
        <p className="text-xl font-semibold text-slate-400 py-2">
         Get started with the dropdown
          component to show a list of menu items when clicking on the trigger
          element based on multiple layouts, styles, and placements
        </p>
       
        <h2 className="text-3xl font-semibold text-slate-50">
          Default DropDown
        </h2>
      </div>
      <div className="text-cyan-400 w-2/3 m-auto bg-trasparent border-2 p-5 rounded-xl">
        <DropDown />
      </div>
    </div>
  );
};

export default DropdownPage;
