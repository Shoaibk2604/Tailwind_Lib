import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
const SyntaxCodeHighlighter = (props) => {
    
  const [copy, setCopy] = useState(false);
  return (
    <div className="max-w-3xl min-w-[25rem] bg-[#3a404d] overflow-hidden  m-auto mt-5">
      <div className="flex justify-between px-4 text-white text-xs items-center">
        <p className="text-sm">Code</p>
        {copy ? (
          <button className="py-1 inline-flex items-center gap-1 text-sm">
            Copied!
          </button>
        ) : (
          <button
            onClick={() => {
              navigator.clipboard.writeText(props.code);
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
        {props.code}
      </SyntaxHighlighter>
    </div>
  );
};

export default SyntaxCodeHighlighter;
