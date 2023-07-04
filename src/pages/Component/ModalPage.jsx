import React from "react";
import Modal from "../../components/Modal";

const ModalPage = () => {
  return (
    <div className="bg-main z-19">
      <div className=" mx-8 py-6">
        <h2 className="text-4xl font-bold text-slate-50">Tailwind CSS Modal</h2>
        <p className="text-xl font-semibold text-slate-400 py-2">
          Use the modal component to show interactive dialogs and notifications
          to your website users available in multiple sizes, colors, and styles
        </p>

        <h2 className="text-3xl font-semibold text-slate-50">
          Default Modal
        </h2>
      </div>
      <div className="relative text-cyan-400 w-2/3 h-1/2 m-auto bg-trasparent border-2 p-5 rounded-xl">
        <Modal />
      </div>
    </div>
  );
};

export default ModalPage;
