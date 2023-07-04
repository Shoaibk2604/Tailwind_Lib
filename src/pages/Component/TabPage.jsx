import React from "react";
import Tab from "../../components/Tab";

const TabPage = () => {
  return (
    <div className="bg-main z-19">
      <div className=" mx-8 py-6">
        <h2 className="text-4xl font-bold text-slate-50">
          Tailwind CSS Tab
        </h2>
        <p className="text-xl font-semibold text-slate-400 py-2">
          Use these responsive tabs components to create a secondary
          navigational hierarchy for your website or toggle content inside a
          container
        </p>

        <h2 className="text-3xl font-semibold text-slate-50">
          Default Tab
        </h2>
      </div>
      <div className="relative overflow-hidden text-cyan-400 w-2/3 h-auto m-auto bg-trasparent border-2 p-5 rounded-xl">
        <Tab />
      </div>
    </div>
  );
};

export default TabPage;
