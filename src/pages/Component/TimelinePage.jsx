import React from "react";
import TimeLine from "../../components/TimeLine";

const TimelinePage = () => {
  return (
    <div className="bg-main z-19">
      <div className=" mx-8 py-6">
        <h2 className="text-4xl font-bold text-slate-50">
        Tailwind CSS Timeline
        </h2>
        <p className="text-xl font-semibold text-slate-400 py-2">
          Get started with the responsive timeline component to show data in a
          chronological order with support for multiple styles, sizes, and
          variants
        </p>

        <h2 className="text-3xl font-semibold text-slate-50">
        Default timeline 
        </h2>
      </div>
      <div className="relative overflow-hidden text-cyan-400 w-2/3 h-auto m-auto bg-trasparent border-2 p-5 rounded-xl">
        <TimeLine />
      </div>
    </div>
  );
};

export default TimelinePage;
