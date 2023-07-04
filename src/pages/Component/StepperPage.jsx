import React from "react";
import Stepper from "../../components/Stepper";

const StepperPage = () => {
  return (
    <div className="bg-main z-19">
      <div className=" mx-8 py-6">
        <h2 className="text-4xl font-bold text-slate-50">
          Tailwind CSS Stepper
        </h2>
        <p className="text-xl font-semibold text-slate-400 py-2">
          Use the stepper component to show the number of steps required to
          complete a form inside your application based on Tailwind CSS
        </p>

        <h2 className="text-3xl font-semibold text-slate-50">
          Default Stepper
        </h2>
      </div>
      <div className="relative overflow-hidden text-cyan-400 w-2/3 h-auto m-auto bg-trasparent border-2 p-5 rounded-xl">
        <Stepper />
      </div>
    </div>
  );
};

export default StepperPage;
