import React from "react";
import DropDown from "../../components/DropDown";
import SyntaxCodeHighlighter from "../../components/SyntaxCodeHighlighter";

const DropdownPage = () => {
  const codeSyntax = `import React from "react";
  import { useState } from "react";
  
  const DropDown = () => {
    const [dropDown, setdropDownOpen] = useState(false);
    const dropDownHandler = () => {
      if (dropDown === true) {
        setdropDownOpen(false);
      } else {
        setdropDownOpen(true);
      }
    };
    return (
      <>
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          onClick={() => dropDownHandler(true)}
        >
          Dropdown button{" "}
          <svg
            className="w-4 h-4 ml-2"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
  
        <div
          className={
            dropDown
              ? "z-10 block bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              : "z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          }
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Earnings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </>
    );
  };
  
  export default DropDown;
  `;
  return (
    <div className="bg-main z-19">
      <div className=" mx-8 py-6">
        <h2 className="text-4xl font-bold text-slate-50">
          Tailwind CSS Dropdown
        </h2>
        <p className="text-xl font-semibold text-slate-400 py-2">
          Get started with the dropdown component to show a list of menu items
          when clicking on the trigger element based on multiple layouts,
          styles, and placements
        </p>

        <h2 className="text-3xl font-semibold text-slate-50">
          Default DropDown
        </h2>
      </div>
      <div className="text-cyan-400 w-2/3 m-auto bg-trasparent border-2 p-5 rounded-xl">
        <DropDown />
        <SyntaxCodeHighlighter code={codeSyntax} />
      </div>
    </div>
  );
};

export default DropdownPage;
