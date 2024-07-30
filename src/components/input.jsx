import React, { useState } from "react";

const Input = () => {
  const [searchValue, setSearchValue] = useState("");
  const handleChange = (e) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  };
  return (
    <>
      <input
        className="border border-gray-400"
        type="text"
        onChange={handleChange}
      />
      <p>Search value: {searchValue}</p>
    </>
  );
};

export default Input;
