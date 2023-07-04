import React from "react";

const Nexts = () => {
  return (
    <div className="bg-white overflow-y-auto dark:bg-gray-900 fixed h-full  w-5/6 z-19 top-16 right-0 py-10 px-8 border-t-[2px] border-gray-200 dark:border-gray-600">
      <div className="border-b-[2px] border-gray-700 mx-8 py-6">
        <h2 className="text-4xl font-bold text-slate-50">
          Tailwind CSS Next.js
        </h2>
        <p className="text-xl font-semibold text-slate-400 py-2">
          Learn how to install Tailwind CSS for your Next.js project and start
          developing with the most popular React-based framework built by Vercel
        </p>
      </div>
      <div className="border-b-[2px] border-gray-700 mx-8 py-6">
        <h2 className="text-2xl font-semibold text-slate-50">Requirements</h2>
        <p className="text-xl font-semibold text-slate-400 py-2">
          Make sure that you have Node.js installed on your computer to be able
          to install Next.js, Tailwind CSS and Tailwind using NPX and NPM.
        </p>
      </div>

      <div className=" mx-8 py-6">
        <h2 className="text-2xl font-semibold text-slate-50">
          Create a Next.js project
        </h2>
        <p className="text-xl font-semibold text-slate-400 py-2">
          1. Run the following command to create a new starter Next.js project:
        </p>
        <div className="text-cyan-400 bg-gray-800 p-5 rounded-xl">
          <h6>
            npx create-next-app@latest --typescript <br />
            cd my-app
          </h6>
        </div>
        <p className="text-xl font-semibold text-slate-400 py-2">
          This command will install all of the necessary dependencies and
          boilerplate files for a basic Next.js project.
        </p>
        <p className="text-xl font-semibold text-slate-400 py-2">
          2. Run the following command in your terminal to start a local server:
        </p>
      <div className="text-cyan-400 bg-gray-800 p-5 rounded-xl">
        <h6>npm run dev</h6>
      </div>
      <p className="text-xl font-semibold text-slate-400 py-2">
        This will make local development accessible via the browser on
        http://localhost:3000.
      </p>
      <p className="text-xl font-semibold text-slate-400 py-2">
        3. Run the following command to build the project files:
      </p>
      <div className="text-cyan-400 bg-gray-800 p-5 rounded-xl">
        <h6>npm run build</h6>
      </div>
      </div>
      <div className="border-b-[2px] border-gray-700 mx-8 py-6">
        <h2 className="text-2xl font-semibold text-slate-50">
          Install Tailwind CSS
        </h2>
        <p className="text-xl font-semibold text-slate-400 py-2">
          After you have a working Next.js project the next step would be to
          follow the installation guide for Tailwind CSS.
        </p>
        <p className="text-xl font-semibold text-slate-400 py-2">
          1. Install Tailwind CSS, PostCSS and Autoprefixer using NPM:
        </p>
        <div className="text-cyan-400 bg-gray-800 p-5 rounded-xl">
          <h6>
            npm install -D tailwindcss postcss autoprefixer
            <br /> npx tailwindcss init -p
          </h6>
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
            {`"./pages/**/*.{ts,tsx}" ,`}
            <br />
            {`"./public/**/*.html" ,`}
            <br />
            {`] ,`}
            <br />
            {"plugins: [ ],"}
            <br />
            {`theme: { },`}<br/>
            {" } ;"}
          </h6>
        </div>
        <p className="text-xl font-semibold text-slate-400 py-2">
          This is needed in order to look for all of the class names inside the
          project and only include the used ones in the final CSS file.
        </p>
        <p className="text-xl font-semibold text-slate-400 py-2">
          3. Replace the contents of the styles/globals.css file and import the
          following directives:
        </p>
        <div className="text-cyan-400 bg-gray-800 p-5 rounded-xl">
          <h6>
            @tailwind base;
            <br /> @tailwind components;
            <br /> @tailwind utilities;
          </h6>
          <p className="text-xl font-semibold text-slate-400 py-2">
            With this last change you should now have a proper Next.js and
            Tailwind CSS configuration set up.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Nexts;
