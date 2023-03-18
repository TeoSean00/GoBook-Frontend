import React from "react";

const Button = ({ name, onClick, color = "blue" }) => {
  return (
    <button
      type="button"
      className={`w-fit rounded-lg bg-${color}-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-${color}-800 focus:outline-none focus:ring-4 focus:ring-${color}-300 dark:bg-${color}-600  dark:hover:bg-${color}-700 dark:focus:ring-${color}-800`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
