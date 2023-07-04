import React from "react";
import NavBar from "../../components/NavBar";

const NavBarPage = () => {
  return (
    <div className="bg-main z-19">
      <div className=" mx-8 py-6">
        <h2 className="text-4xl font-bold text-slate-50">
          Tailwind CSS NavBar
        </h2>
        <p className="text-xl font-semibold text-slate-400 py-2">
          The navbar component can be used to show a list of navigation links
          positioned on the top side of your page based on multiple layouts,
          sizes, and dropdowns
        </p>

        <h2 className="text-3xl font-semibold text-slate-50">
        Default navbar 
        </h2>
      </div>
      <div className="relative text-cyan-400 w-2/3 h-auto m-auto bg-trasparent border-2 p-5 rounded-xl">
        <NavBar />
      </div>
    </div>
  );
};

export default NavBarPage;
