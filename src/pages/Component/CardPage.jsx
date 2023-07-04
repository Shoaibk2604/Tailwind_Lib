import React from "react";
import Card from "../../components/Card";

function CardPage() {
  return (
    <div className="bg-main z-19">
      <div className=" mx-8 py-6">
        <h2 className="text-4xl font-bold text-slate-50">Tailwind CSS Card</h2>
        <p className="text-xl font-semibold text-slate-400 py-2">
          Get started with a large variety of Tailwind CSS card examples for
          your web project
        </p>
        <h2 className="text-3xl font-semibold text-slate-50">
        Card with button
        </h2>
      </div>
      <div className="text-cyan-400 w-2/3 m-auto bg-trasparent border-2 p-5 rounded-xl">
        <Card />
      </div>
    </div>
  );
}

export default CardPage;
