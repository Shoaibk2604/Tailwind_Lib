import React from "react";
import Accordion from "../../components/Accordion";

const AccordianPage = () => {
  return (
    <div className="bg-main z-19">
      <div className=" mx-8 py-6">
        <h2 className="text-4xl font-bold text-slate-50">
          Tailwind CSS Accordion
        </h2>
        <p className="text-xl font-semibold text-slate-400 py-2">
          Use the accordion component to show hidden information based on the
          collapse and expand state of the child elements using useState.
        </p>
        <p className="text-xl font-semibold text-slate-400 py-2">
          The accordion component is a collection of vertically collapsing
          header and body elements that can be used to show and hide information
          based on the Tailwind CSS utility classes.
        </p>
        <h2 className="text-3xl font-semibold text-slate-50">Default accordion</h2>
      </div>
      <div className="text-cyan-400 w-2/3 m-auto bg-trasparent border-2 p-5 rounded-xl">
      <Accordion />

      </div>
    </div>
  );
};

export default AccordianPage;
