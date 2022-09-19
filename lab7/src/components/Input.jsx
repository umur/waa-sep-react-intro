import React, { useState } from "react";

const Input = ({ title, defaultValue }) => {
  const [input, setinput] = useState(defaultValue);
  return (
    <div>
      <label>{title}</label>
      <input value={input} onChange={(e) => setinput(e.target.values)}></input>
    </div>
  );
};

export default Input;
