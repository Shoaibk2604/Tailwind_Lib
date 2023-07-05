import React from "react";
import Accordion from "../../components/Accordion";
import SyntaxCodeHighlighter from "../../components/SyntaxCodeHighlighter";
const AccordianPage = () => {
  const codeSyntax = `import React from "react";
  import { useState } from "react";
  
  const Accordion = () => {
    const [toggle, setToggle] = useState(null);
    const collapseTriger = (index) => {
      setToggle(toggle === index ? null : index);
    };
    return (
      <div>
        <h2 onClick={() => collapseTriger(0)}>
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <span>What is Tailwind?</span>
            <svg
              className={
                toggle == 0
                  ? "w-6 h-6 rotate-180 shrink-0"
                  : "w-6 h-6 rotate-0 shrink-0"
              }
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <div className={toggle == 0 ? "block" : "hidden"}>
          <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Tailwind is an open-source library of interactive components built
              on top of Tailwind CSS including buttons, dropdowns, modals,
              navbars, and more.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Check out this guide to learn how to{" "}
              <a
                href="/docs/getting-started/introduction/"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                get started
              </a>{" "}
              and start developing websites even faster with components on top of
              Tailwind CSS.
            </p>
          </div>
        </div>
        <h2 onClick={() => collapseTriger(1)}>
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <span>Is there a Figma file available?</span>
            <svg
              className={
                toggle == 1
                  ? "w-6 h-6 rotate-180 shrink-0"
                  : "w-6 h-6 rotate-0 shrink-0"
              }
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <div className={toggle == 1 ? "block" : "hidden"}>
          <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Tailwind is first conceptualized and designed using the Figma
              software so everything you see in the library has a design
              equivalent in our Figma file.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Check out the{" "}
              <a
                href="#"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                Figma design system
              </a>{" "}
              based on the utility classNamees from Tailwind CSS and components
              from Tailwind.
            </p>
          </div>
        </div>
        <h2 onClick={() => collapseTriger(2)}>
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-collapse-body-3"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-3"
          >
            <span>
              What are the differences between Tailwind and Tailwind UI?
            </span>
            <svg
              className={
                toggle == 2
                  ? "w-6 h-6 rotate-180 shrink-0"
                  : "w-6 h-6 rotate-0 shrink-0"
              }
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <div className={toggle == 2 ? "block" : "hidden"}>
          <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              The main difference is that the core components from Tailwind are
              open source under the MIT license, whereas Tailwind UI is a paid
              product. Another difference is that Tailwind relies on smaller and
              standalone components, whereas Tailwind UI offers sections of pages.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              However, we actually recommend using both Tailwind, Tailwind Pro,
              and even Tailwind UI as there is no technical reason stopping you
              from using the best of two worlds.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Learn more about these technologies:
            </p>
            <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
              <li>
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Tailwind 
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindui.com/"
                  rel="nofollow"
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Tailwind UI
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default Accordion;
  `;
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
        <h2 className="text-3xl font-semibold text-slate-50">
          Default accordion
        </h2>
      </div>
      <div className="text-cyan-400 w-2/3 m-auto bg-trasparent border-2 p-5 rounded-xl">
        <Accordion />
      </div>
      <SyntaxCodeHighlighter code={codeSyntax} />
    </div>
  );
};

export default AccordianPage;
