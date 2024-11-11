import React from "react";
import { useState, useRef } from "react";

const FormComponent = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [userError, setUserError] = useState("");
  const [mailError, setMailError] = useState("");
  const usernameInputRef = useRef(null);
  const emailInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    if (username.length < 3 && username === "") {
      setUserError("Username must be at least 3 characters long");
      usernameInputRef.current.focus();
      isValid = false;
    } else {
      setUserError("");
    }

    if (!email.includes("@") && email === "") {
      setMailError(
        'The email must contain an "@" symbol to be considered valid.',
      );
      emailInputRef.current.focus();
      isValid = false;
    } else {
      setMailError("");
    }

    if (isValid) alert("Form submitted successfully!");
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div id="username" className="flex flex-col gap-1">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          className={`w-96 rounded border-2 border-black p-1 ${userError ? "focus:outline-pink-500" : "focus:outline-black"}`}
          ref={usernameInputRef}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <p id="error" className="text-pink-500">
          {userError}
        </p>
      </div>

      <div id="mail" className="flex flex-col gap-1">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          className={`w-96 rounded border-2 border-black p-1 ${mailError ? "focus:outline-pink-500" : "focus:outline-black"}`}
          ref={emailInputRef}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <p id="error" className="text-pink-500">
          {mailError}
        </p>
      </div>

      <input
        type="submit"
        value="Submit"
        className="cursor-pointer rounded bg-black p-1 text-white"
      />
    </form>
  );
};

export default FormComponent;
