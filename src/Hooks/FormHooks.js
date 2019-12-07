// eslint-disable-next-line
import React, { useState } from "react";

export const useFormHooks = () => {
  const initialInputState = { player: "", score: "" };
  const [inputs, setInputs] = useState(initialInputState);
  const [final, setFinal] = useState({});
  const [count, setCount] = useState(0);

  const handleInputChange = e => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleFinal = e => {
    if (e) e.preventDefault();
    setCount(count + 1);
    setFinal({ ...final, [count]: inputs });
    console.log(final);
  };

  return { inputs, handleInputChange, handleFinal, final };
};
