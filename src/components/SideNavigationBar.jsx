import React from "react";
import { Link, useLocation } from "react-router-dom";

const SideNavigationBar = () => {
  const route = useLocation();

  return (
    <div className="bg-white overflow-y-auto dark:bg-gray-900 fixed h-screen  w-1/6 z-19 top-16 py-10 px-5 border-t-[2px] border-gray-200 dark:border-gray-600">
      <div>
        <h3 className="text-slate-50 text-md font-semibold uppercase">
          Getting Started
        </h3>
        <ul className="text-slate-400  text-md  tracking-wide py-1">
          {first.map((elem, index) => {
            return (
              <li
                key={index}
                className={
                  route.pathname == elem.link
                    ? "hover:text-slate-50 text-slate-50 cursor-pointer my-1"
                    : "hover:text-slate-50 cursor-pointer my-1"
                }
              >
                <Link to={elem.link}>{elem.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="my-6">
        <h3 className="text-slate-50 text-md font-semibold uppercase">
          INTEGRATION GUIDES
        </h3>
        <ul className="text-slate-400  text-md  tracking-wide py-1">
          {second.map((elem, index) => {
            return (
              <li
                key={index}
                className={
                  route.pathname == elem.link
                    ? "hover:text-slate-50 text-slate-50 cursor-pointer my-1"
                    : "hover:text-slate-50 cursor-pointer my-1"
                }
              >
                <Link to={elem.link}>{elem.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="my-6">
        <h3 className="text-slate-50 text-md font-semibold uppercase">
          Components
        </h3>
        <ul className="text-slate-400  text-md  tracking-wide py-1">
          {sideBarLinks.map((elem, index) => {
            return (
              <li
                key={index}
                className={
                  route.pathname == elem.link
                    ? "hover:text-slate-50 text-slate-50 cursor-pointer my-1"
                    : "hover:text-slate-50 cursor-pointer my-1"
                }
              >
                <Link to={elem.link}>{elem.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SideNavigationBar;

const first = [
  {
    title: "Introduction",
    link: "/",
  },
  {
    title: "quickstart",
    link: "/quickstart",
  },
];
const second = [
  {
    title: "React",
    link: "/react",
  },
  {
    title: "Next.js",
    link: "/next",
  },
];
const sideBarLinks = [
  {
    title: "Accordion",
    link: "/accordion",
  },
  {
    title: "Banner",
    link: "/banner",
  },
  {
    title: "Bottom Navigation",
    link: "/bottomNavigation",
  },
  {
    title: "Breadcrumb",
    link: "/breadCrumb",
  },
  {
    title: "Buttons",
    link: "/buttons",
  },
  {
    title: "Card",
    link: "/card",
  },
  {
    title: "Dropdowns",
    link: "/dropdowns",
  },
  {
    title: "Footer",
    link: "/footer",
  },
  {
    title: "Mega Menu",
    link: "/megaMenu",
  },
  {
    title: "Modal",
    link: "/modal",
  },
  {
    title: "NavBar",
    link: "/navBar",
  },
  {
    title: "Pagination",
    link: "/pagination",
  },
  {
    title: "Sidebar",
    link: "/sideBar",
  },
  {
    title: "Stepper",
    link: "/stepper",
  },
  {
    title: "Tab",
    link: "/tab",
  },
  {
    title: "Timeline",
    link: "/timeline",
  },
];
