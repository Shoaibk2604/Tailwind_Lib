import React from "react";
import MegaMenu from "../../components/MegaMenu";

const MegaMenuPage = () => {
  return (
    <div className="bg-main z-19">
      <div className=" mx-8 py-6">
        <h2 className="text-4xl font-bold text-slate-50">
          Tailwind CSS MegaMenu
        </h2>
        <p className="text-xl font-semibold text-slate-400 py-2">
          Use the mega menu component as a full-width dropdown inside the navbar
          to show a list of menu items based on multiple sizes, variants, and
          styles.
        </p>

        <h2 className="text-3xl font-semibold text-slate-50">
          Default MegaMenu
        </h2>
      </div>
      <div className="text-cyan-400 w-2/3 m-auto bg-trasparent border-2 p-5 rounded-xl">
        <MegaMenu />
      </div>
    </div>
  );
};

export default MegaMenuPage;
