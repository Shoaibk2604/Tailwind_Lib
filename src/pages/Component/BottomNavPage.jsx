import React from "react";
import BottomNavigation from "../../components/BottomNavigation";

const BottomNavPage = () => {
  return (
    <div className="bg-main z-19">
      <div className=" mx-8 py-6">
        <h2 className="text-4xl font-bold text-slate-50">
          Tailwind CSS Bottom Navigation
        </h2>
        <p className="text-xl font-semibold text-slate-400 py-2">
          Use the bottom navigation bar component to allow users to navigate
          through your website or create a control bar using a menu that is
          positioned at the bottom of the page
        </p>
        <h2 className="text-3xl font-semibold text-slate-50">
        Default bottom navigation
        </h2>
      </div>
      <div className="text-cyan-400 w-2/3 h-1/4 m-auto bg-trasparent border-2 p-5 relative ">
        <BottomNavigation />
      </div>
    </div>
  );
};

export default BottomNavPage;
