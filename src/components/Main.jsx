import React from "react";

const Main = () => {
  return (
    <div className="bg-main z-19">
      <div className="border-b-[2px] border-gray-700 mx-8 py-6">
        <h2 className="text-4xl font-bold text-slate-50">
          Free Tailwind CSS component library
        </h2>
        <p className="text-xl font-semibold text-slate-400 py-2">
          Get started with the most popular open-source library of interactive
          UI components built with the utility classes from Tailwind CSS.
        </p>
      </div>
      <div className="border-b-[2px] border-gray-700 mx-8 py-6">
        <h2 className="text-3xl font-semibold text-slate-50">Introduction</h2>
        <p className="text-xl font-semibold text-slate-400 py-2">
          Tailwind is an open-source library of UI components based on the
          utility-first Tailwind CSS framework featuring dark mode support, a
          Figma design system, templates, and more.
          <br /> It includes all of the commonly used components that a website
          requires, such as buttons, dropdowns, navigation bars, modals, but
          also some more advanced interactive elements such as datepickers.
          <br /> All of the elements are built using the utility classes from
          Tailwind CSS .
        </p>
      </div>
      <div className="border-b-[2px] border-gray-700 mx-8 py-6">
        <h2 className="text-3xl font-semibold text-slate-50">Using Tailwind</h2>
        <p className="text-xl font-semibold text-slate-400 py-2">
          One of the disadvantages of Tailwind CSS compared to other frameworks
          is that it doesn’t have a base set of components. This makes it really
          hard to quickly prototype a user interface.
          <br /> This is where Tailwind comes into play: it’s basically Tailwind
          CSS, but you get all of the components that you would normally get
          with a classic CSS framework like Bootstrap or Bulma.
        </p>
      </div>
    </div>
  );
};

export default Main;
