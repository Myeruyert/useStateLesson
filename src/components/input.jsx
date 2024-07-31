import React, { useState } from "react";

const Input = ({ handleChange }) => {
  return (
    <>
      <input
        className="border border-gray-400"
        type="text"
        onChange={handleChange}
      />
      {/* <p>Search value: {searchValue}</p> */}
      Clear
    </>
  );
};

export default Input;
