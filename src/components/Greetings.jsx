import React, { useState } from "react";
const Greetings = () => {
  const [message, setMessage] = useState("");
  const handleMessage = () => {
    setMessage("Greetings! You clicked the button!");
  };
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-4xl">Welcome to Our Page</h2>
      <button
        className="rounded border bg-black p-1 text-white"
        onClick={handleMessage}
      >
        Click Me
      </button>
      <p id="message">{message}</p>
    </div>
  );
};

export default Greetings;
