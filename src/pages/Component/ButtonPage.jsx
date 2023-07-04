import React from "react";
import ButtonGroup from "../../components/ButtonGroup";
import Buttons from "../../components/Buttons";

const ButtonPage = () => {
  return (
    <div className="bg-main z-19">
      <div className=" mx-8 py-6">
        <h2 className="text-4xl font-bold text-slate-50">
          Tailwind CSS Buttons
        </h2>
        <p className="text-xl font-semibold text-slate-400 py-2">
          Use the button component inside forms, as links, social login, payment
          options with support for multiple styles, colors, sizes, gradients,
          and shadows
        </p>
        <p className="text-xl font-semibold text-slate-400 py-2">
          The button component is probably the most widely used element in any
          user interface or website as it can be used to launch an action but
          also to link to other pages.
        </p>
        <h2 className="text-3xl font-semibold text-slate-50">Default button</h2>
      </div>
      <div className="text-cyan-400 w-2/3 m-auto bg-trasparent border-2 p-5 rounded-xl">
        <Buttons />
      </div>
      <div className=" mx-8 py-6">
        <h2 className="text-4xl font-bold text-slate-50">
          Tailwind CSS Button Group
        </h2>
        <p className="text-xl font-semibold text-slate-400 py-2">
          Button groups are a Tailwind CSS powered set of buttons sticked
          together in a horizontal line
        </p>
        
        <h2 className="text-3xl font-semibold text-slate-50">Default button group</h2>
      </div>
      <div className="text-cyan-400 w-2/3 m-auto bg-trasparent border-2 p-5 rounded-xl">
        <ButtonGroup />
      </div>
    </div>
  );
};

export default ButtonPage;
