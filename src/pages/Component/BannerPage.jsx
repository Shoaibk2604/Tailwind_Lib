import React, { useState } from "react";
import Banner from "../../components/Banner";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
const BannerPage = () => {
  const [copy, setCopy] = useState(false);
  const codeString = `import React from "react";
  import { useState } from "react";
  
  const Banner = () => {
    const [close, setClose] = useState(false);
    return (
      <div
        className={
          close
            ? "hidden"
            : "Absolute  left-0 z-50 flex justify-between w-full p-4 border-b border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
        }
      >
        <div className="flex items-center mx-auto">
          <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
            <span className="inline-flex p-1 mr-3 bg-gray-200 rounded-full dark:bg-gray-600">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"></path>
              </svg>
              <span className="sr-only">Light bulb</span>
            </span>
            <span>
              New brand identity has been launched for the{" "}
              <a
                href="#"
                className="inline font-medium text-blue-600 underline dark:text-blue-500 underline-offset-2 decoration-600 dark:decoration-500 decoration-solid hover:no-underline"
              >
                Tailwind Library
              </a>
            </span>
          </p>
        </div>
        <div className="flex items-center">
          <button
            data-dismiss-target="#sticky-banner"
            type="button"
            onClick={() => setClose(true)}
            className="flex-shrink-0 inline-flex justify-center items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              aria-hidden="true"
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close banner</span>
          </button>
        </div>
      </div>
    );
  };
  
  export default Banner;`;
  return (
    <div className="bg-main z-19">
      <div className=" mx-8 py-6">
        <h2 className="text-4xl font-bold text-slate-50">
          Tailwind CSS Sticky Banner
        </h2>
        <p className="text-xl font-semibold text-slate-400 py-2">
          Use the banner component to show marketing messages and CTA buttons at
          the top or bottom side of your website based on the utility classes
          from Tailwind CSS
        </p>
        <h2 className="text-3xl font-semibold text-slate-50">
          Default sticky banner
        </h2>
      </div>
      <div className="text-cyan-400 w-2/3 m-auto bg-trasparent border-2 p-5 rounded-xl">
        <Banner />
        <div className="max-w-3xl min-w-[25rem] bg-[#3a404d] overflow-hidden">
          <div className="flex justify-between px-4 text-white text-xs items-center">
            <p className="text-sm">Code</p>
            {copy ? (
              <button className="py-1 inline-flex items-center gap-1 text-sm">
                Copied!
              </button>
            ) : (
              <button
                onClick={() => {
                  navigator.clipboard.writeText(codeString);
                  setCopy(true);
                  setTimeout(() => {
                    setCopy(false);
                  }, 2000);
                }}
                className="py-1 inline-flex items-center gap-1 text-sm"
              >
                Copy Code
              </button>
            )}
          </div>
          <SyntaxHighlighter
            language="javascript"
            style={atomOneDark}
            customStyle={{ padding: "20px", height: "30rem" }}
          >
            {codeString}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default BannerPage;
