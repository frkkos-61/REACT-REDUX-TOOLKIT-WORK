import React from "react";

const Button = ({ onClick, btnText }) => {
  return (
    <button
      onClick={onClick}
      className="w-full h-10 bg-green-800 text-black font-bold flex items-center justify-center mt-4 rounded-md hover:bg-green-500"
    >
      {btnText}
    </button>
  );
};

export default Button;
