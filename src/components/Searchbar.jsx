import React from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";

const Searchbar = () => {
  return (
    <div className="relative my-5 mx-auto w-[75%] sm:w-[50%]">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <HiMagnifyingGlass />
      </div>
      <input
        type="text"
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        placeholder="Search Courses"
      />
    </div>
  );
};

export default Searchbar;
