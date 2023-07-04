import React from "react";

const Reacts = () => {
  return (
    <div className="bg-white overflow-y-auto dark:bg-gray-900 fixed h-full  w-5/6 z-19 top-16 right-0 py-10 px-8 border-t-[2px] border-gray-200 dark:border-gray-600">
      <div className="border-b-[2px] border-gray-700 mx-8 py-6">
        <h2 className="text-4xl font-bold text-slate-50">Tailwind CSS React</h2>
        <p className="text-xl font-semibold text-slate-400 py-2">
          Learn how to install Tailwind CSS for your React project and start
          developing modern web applications using interactive elements based on
          utility classes.
        </p>
      </div>
      <div className="border-b-[2px] border-gray-700 mx-8 py-6">
        <h2 className="text-2xl font-semibold text-slate-50">
          Create a React project
        </h2>
        <p className="text-xl font-semibold text-slate-400 py-2">
          The latest recommended way of creating a new React application is to
          use a front-end tooling software such as Vite or Parcel, but you can
          also use a more classic method such as Create React App.
        </p>
      </div>
      <div className="border-b-[2px] border-gray-700 mx-8 py-6">
        <h2 className="text-2xl font-semibold text-slate-50">
          Using Vite React
        </h2>
        <p className="text-xl font-semibold text-slate-400 py-2">
          1. Create a new React project using Vite by running the following two
          commands:
        </p>
        <div className="text-cyan-400 bg-gray-800 p-5 rounded-xl">
          <h6>npm create vite@latest my-project -- --template react</h6>
          <h6>cd my-project</h6>
        </div>
        <p className="text-xl font-semibold text-slate-400 py-2">
          Now that the project has been created you can start a local
          development server by running npm run dev and use the npm run build
          command to create an optimized build for production use.
        </p>
      </div>
      <div className="border-b-[2px] border-gray-700 mx-8 py-6">
        <h2 className="text-2xl font-semibold text-slate-50">
          Create React App
        </h2>
        <p className="text-xl font-semibold text-slate-400 py-2">
          Follow the next steps to install Tailwind CSS and Tailwind with Create
          React App.
        </p>
        <p className="text-xl font-semibold text-slate-400 py-2">
          1. Run the following command in your terminal to create a React
          application, if you don’t already have one:
        </p>
        <div className="text-cyan-400 bg-gray-800 p-5 rounded-xl">
          <h6>npx create-react-app my-project</h6>
          <h6>cd my-project</h6>
        </div>
        <p className="text-xl font-semibold text-slate-400 py-2">
          You can now run npm run start to start a local server and npm run
          build to create a production build.
        </p>
      </div>
      <div className="border-b-[2px] border-gray-700 mx-8 py-6">
        <h2 className="text-2xl font-semibold text-slate-50">
          Install Tailwind CSS
        </h2>
        <p className="text-xl font-semibold text-slate-400 py-2">
          Install Tailwind CSS by running the following two commands:
        </p>
        <div className="text-cyan-400 bg-gray-800 p-5 rounded-xl">
          <h6>npm install -D tailwindcss postcss autoprefixer</h6>
          <h6>npx tailwindcss init -p</h6>
        </div>
        <p className="text-xl font-semibold text-slate-400 py-2">
          2. Configure the template paths inside the tailwind.config.js file:
        </p>
        <div className="text-cyan-400 bg-gray-800 p-5 rounded-xl">
          <h6>
            {"module.exports = {"}
            <br />
            {"content: ["}
            <br />
            {`'./src/**/*.{ js,jsx,ts,tsx }',`}
            <br />
            {`]`}
            {"theme: {"}
            <br />
            {`extend: { },`}
            <br />
            {"},"}
            <br />
            {"plugins: [ ],"}
            <br />
            {"}"}
          </h6>
        </div>
        <p className="text-xl font-semibold text-slate-400 py-2">
          3. Set up the Tailwind directives inside the ./src/index.css file:
        </p>
        <div className="text-cyan-400 bg-gray-800 p-5 rounded-xl">
          <h6>
            @tailwind base;
            <br /> @tailwind components;
            <br /> @tailwind utilities;
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Reacts;
