import React from "react";

const Input = ({ value, type, id, name, onChange, placeholder }) => {
  return (
    <input
      className="h-10 w-full border rounded-md outline-none p-2 mt-2"
      value={value}
      type={type}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
export default Input;
