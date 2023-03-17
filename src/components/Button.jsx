import React from "react";

const Button = ({ name, onClick = "" }) => {
  return (
    <button
      type="button"
      className=" w-fit rounded-md bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600  dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
