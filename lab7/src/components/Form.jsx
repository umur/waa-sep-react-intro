import React, { useState } from "react";

const Form = () => {
  const [first, setfirst] = useState("");
  const [lastname, setlast] = useState("");
  const handleSubmit = () => {
    console.log(first, lastname);
    reset();
  };
  const reset = () => {
    setfirst("");
    setlast("");
  };
  return (
    <div>
      Form
      <input value={first} onChange={(e) => setfirst(e.target.value)} />
      <input value={lastname} onChange={(e) => setlast(e.target.value)} />
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Form;
