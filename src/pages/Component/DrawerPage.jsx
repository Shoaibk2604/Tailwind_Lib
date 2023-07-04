import React from "react";
import Drawer from "../../components/Drawer";

function DrawerPage() {
  return (
    <div className="bg-main z-19">
      <div className=" mx-8 py-6">
        <h2 className="text-4xl font-bold text-slate-50">
          Tailwind CSS Drawer
        </h2>
        <p className="text-xl font-semibold text-slate-400 py-2">
          The Drawer component can be used as a hidden off-canvas sidebar for
          navigation and to show other information based on multiple styles and
          placements
        </p>

        <h2 className="text-3xl font-semibold text-slate-50">
          Drawer navigation
        </h2>
      </div>
      <div className="relative overflow-hidden text-cyan-400 w-full h-full  m-auto bg-trasparent border-2 p-5 rounded-xl">
        <Drawer />
      </div>
    </div>
  );
}

export default DrawerPage;
