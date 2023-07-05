import React from "react";
import SyntaxCodeHighlighter from "../../components/SyntaxCodeHighlighter";
import Tab from "../../components/Tab";

const TabPage = () => {
  const codeSyntax = `import React from "react";

  const Tab = () => {
    return (
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px">
          <li className="mr-2">
            <a
              href="#"
              className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            >
              Profile
            </a>
          </li>
          <li className="mr-2">
            <a
              href="#"
              className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
              aria-current="page"
            >
              Dashboard
            </a>
          </li>
          <li className="mr-2">
            <a
              href="#"
              className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            >
              Settings
            </a>
          </li>
          <li className="mr-2">
            <a
              href="#"
              className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            >
              Contacts
            </a>
          </li>
          <li>
            <a className="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">
              Disabled
            </a>
          </li>
        </ul>
      </div>
    );
  };
  
  export default Tab;
  `; 
  return (
    <div className="bg-main z-19">
      <div className=" mx-8 py-6">
        <h2 className="text-4xl font-bold text-slate-50">
          Tailwind CSS Tab
        </h2>
        <p className="text-xl font-semibold text-slate-400 py-2">
          Use these responsive tabs components to create a secondary
          navigational hierarchy for your website or toggle content inside a
          container
        </p>

        <h2 className="text-3xl font-semibold text-slate-50">
          Default Tab
        </h2>
      </div>
      <div className="relative overflow-hidden text-cyan-400 w-2/3 h-auto m-auto bg-trasparent border-2 p-5 rounded-xl">
        <Tab />

      </div>
        <SyntaxCodeHighlighter code={codeSyntax}/>
    </div>
  );
};

export default TabPage;
