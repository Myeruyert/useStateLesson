import React, { useState } from "react";

const Input = ({ handleChange }) => {
  const changeValue = (e) => {
    handleChange(e.target.value);
  }
  return (
    <>
      <input
        className="border border-gray-400"
        type="text"
        onChange={changeValue}
      />
    </>
  );
};

export default Input;
