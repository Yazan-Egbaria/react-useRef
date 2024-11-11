import React, { useRef, useState } from "react";

const Focus = () => {
  const btnOneRef = useRef(null);
  const btnTwoRef = useRef(null);
  const [activeBtn, setActiveBtn] = useState(null);

  const handleBorder = (btn) => {
    setActiveBtn(btn);
  };

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-4xl">Focus Here</h2>

      <button
        className={`rounded border bg-slate-500 p-1 text-white ${
          activeBtn === btnOneRef ? "border-2 border-pink-500" : "border-none"
        }`}
        ref={btnOneRef}
        tabIndex="0"
        onClick={() => {
          handleBorder(btnOneRef);
        }}
      >
        Click To Focus One
      </button>

      <button
        className={`rounded border bg-slate-500 p-1 text-white ${
          activeBtn === btnTwoRef ? "border-2 border-pink-500" : "border-none"
        }`}
        ref={btnTwoRef}
        onClick={() => {
          handleBorder(btnTwoRef);
        }}
      >
        Click To Focus Two
      </button>
    </div>
  );
};

export default Focus;
