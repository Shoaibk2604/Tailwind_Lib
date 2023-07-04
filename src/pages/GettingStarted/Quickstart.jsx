import React from "react";

const Quickstart = () => {
  return (
    <div className="bg-white overflow-y-auto dark:bg-gray-900 fixed h-full  w-5/6 z-19 top-16 right-0 py-10 px-8 border-t-[2px] border-gray-200 dark:border-gray-600">
      <div className="border-b-[2px] border-gray-700 mx-8 py-6">
        <h2 className="text-4xl font-bold text-slate-50">
          Flowbite - Quickstart
        </h2>
        <p className="text-xl font-semibold text-slate-400 py-2">
          Get started with Flowbite by including it into your project using NPM
          or CDN
        </p>
      </div>
      <p className="text-xl font-semibold text-slate-400 py-10 px-8">
        Flowbite is a library of components built on top of the utility-classes
        from Tailwind CSS and it also includes a JavaScript file that makes
        interactive elements works, such as modals, dropdowns, and more. Learn
        how to get started by following this quickstart guide.
      </p>
    </div>
  );
};

export default Quickstart;
