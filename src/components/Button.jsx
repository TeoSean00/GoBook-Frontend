import React from "react";
import classnames from "classnames";
const Button = ({ name, onClick, color }) => {
  const colorVariants = {
    blue: "bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
    red: "bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800",
    gray: "bg-gray-700 hover:bg-gray-800 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800",
    green:
      "bg-green-700 hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800",
    disabled: "bg-gray-400 cursor-not-allowed",
  };
  return (
    <button
      className={`w-fit rounded-lg px-5 py-2.5 text-sm font-medium text-gray-50 duration-150  focus:outline-none focus:ring-4 ${colorVariants[color]}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
