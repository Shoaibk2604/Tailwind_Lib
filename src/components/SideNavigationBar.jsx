import React from "react";
import { Link } from "react-router-dom";

const SideNavigationBar = () => {
  return (
    <div className="bg-white overflow-y-auto dark:bg-gray-900 fixed h-screen  w-1/6 z-19 top-16 py-10 px-5 border-t-[2px] border-gray-200 dark:border-gray-600">
      <div>
        <h3 className="text-slate-50 text-md font-semibold uppercase">
          Getting Started
        </h3>
        <ul className="text-slate-400  text-md  tracking-wide py-1">
          <li className="hover:text-slate-50 cursor-pointer my-1">
            <Link to="/">Introduction</Link>
          </li>
          <li className="hover:text-slate-50 cursor-pointer my-1">
            <Link to="/quickstart">Quickstart</Link>
          </li>
        </ul>
      </div>
      <div className="my-6">
        <h3 className="text-slate-50 text-md font-semibold uppercase">
          INTEGRATION GUIDES
        </h3>
        <ul className="text-slate-400  text-md  tracking-wide py-1">
          <li className="hover:text-slate-50 cursor-pointer my-1">
            <Link to="/react">React</Link>
          </li>
          <li className="hover:text-slate-50 cursor-pointer my-1">
            <Link to="/next">Next.js</Link>
          </li>
        </ul>
      </div>
      <div className="my-6">
        <h3 className="text-slate-50 text-md font-semibold uppercase">
          Components
        </h3>
        <ul className="text-slate-400  text-md  tracking-wide py-1">
          <li className="hover:text-slate-50 cursor-pointer my-1">
            <Link to="/accordion">Accordion</Link>
          </li>
          <li className="hover:text-slate-50 cursor-pointer my-1">
            <Link to="/banner">Banner</Link>
          </li>
          <li className="hover:text-slate-50 cursor-pointer my-1">
            <Link to="/bottomNavigation">Bottom Navigation</Link>
          </li>
          <li className="hover:text-slate-50 cursor-pointer my-1">
            <Link to="/breadcrumb">Breadcrumb</Link>
          </li>
          <li className="hover:text-slate-50 cursor-pointer my-1">
            <Link to="/buttons">Buttons</Link>
          </li>

          <li className="hover:text-slate-50 cursor-pointer my-1">
            <Link to="/card">Card</Link>
          </li>
          <li className="hover:text-slate-50 cursor-pointer my-1">
            <Link to="/drawer">Drawer</Link>
          </li>
          <li className="hover:text-slate-50 cursor-pointer my-1">
            <Link to="/dropdowns">Dropdowns</Link>
          </li>
          <li className="hover:text-slate-50 cursor-pointer my-1">
            <Link to="/footer">Footer</Link>
          </li>

          <li className="hover:text-slate-50 cursor-pointer my-1">
            <Link to="/megaMenu">Mega menu</Link>
          </li>
          <li className="hover:text-slate-50 cursor-pointer my-1">
            <Link to="/modal">Modal</Link>
          </li>
          <li className="hover:text-slate-50 cursor-pointer my-1">
            <Link to="/navBar">Navbar</Link>
          </li>
          <li className="hover:text-slate-50 cursor-pointer my-1">
            <Link to="/pagination">Pagination</Link>
          </li>
          <li className="hover:text-slate-50 cursor-pointer my-1">
            <Link to="/sideBar">Sidebar</Link>
          </li>

          <li className="hover:text-slate-50 cursor-pointer my-1">
            <Link to="/stepper">Stepper</Link>
          </li>
          <li className="hover:text-slate-50 cursor-pointer my-1">
            <Link to="/tab">Tab</Link>
          </li>
          <li className="hover:text-slate-50 cursor-pointer my-1">
            <Link to="/timeline">Timeline</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNavigationBar;
