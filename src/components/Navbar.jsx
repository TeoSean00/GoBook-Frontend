import React, { useState } from "react";
import { HiMagnifyingGlass, HiBars3, HiXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";
export default function Navbar({ user }) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="container mx-auto rounded-lg border-gray-200 bg-gray-50 py-3 px-5 dark:border-gray-700 dark:bg-gray-800 ">
        <div className="container mx-auto flex flex-wrap items-center  justify-between gap-x-5  md:flex-nowrap">
          <div className=" flex w-full justify-between gap-x-2">
            <div className="flex gap-x-3">
              <Link
                to="/"
                className="hidden self-center whitespace-nowrap text-xl font-semibold text-blue-700 dark:text-gray-50 sm:block"
              >
                GoBook
              </Link>
              <Link
                to="/profile"
                state={user}
                className="flex cursor-alias  items-center justify-center rounded  text-gray-700 dark:text-gray-400  dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
              >
                <img
                  className=" h-7 w-7 rounded-full "
                  src={user.picture}
                  alt="profile image"
                />
              </Link>
            </div>
            {/* search bar */}
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <HiMagnifyingGlass />
              </div>
              <input
                type="text"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Search Courses"
              />
            </div>
            <button
              className=" block cursor-pointer  rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none text-gray-700 outline-none hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 md:hidden"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? (
                <HiXMark
                  className=" h-7 w-7
            "
                />
              ) : (
                <HiBars3 className="h-7 w-7" />
              )}
            </button>
          </div>

          {/* list items */}
          <div
            className={
              "flex-grow items-center md:flex" +
              (navbarOpen ? " flex" : " hidden")
            }
          >
            <ul className="ml-auto mt-2 flex list-none flex-col  gap-y-1 md:mt-0 md:flex-row md:gap-x-5">
              <li className="">
                <Link
                  to="/courses"
                  state={user}
                  className="flex h-full w-full cursor-alias items-center justify-end  rounded py-2 px-3 text-gray-700   hover:text-blue-700  dark:text-gray-400 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:dark:hover:bg-transparent md:dark:hover:text-white"
                >
                  Courses
                </Link>
              </li>
              <li className="">
                <Link
                  to="/about"
                  state={user}
                  className="flex h-full w-full cursor-alias items-center justify-end  rounded py-2 pl-3 pr-4 text-gray-700   hover:text-blue-700  dark:text-gray-400 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:dark:hover:bg-transparent md:dark:hover:text-white"
                >
                  About
                </Link>
              </li>
              {/* <li className="flex h-full w-full cursor-alias items-center justify-end rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:justify-center md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white">
                <a
                  className="flex items-center text-xs font-bold uppercase leading-snug text-gray-700  hover:opacity-75"
                  href="#"
                >
                  <span className="ml-2">Find Course</span>
                </a>
              </li>
              <li className="flex h-full w-full cursor-alias items-center justify-end rounded  py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:justify-center md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white">
                <a
                  className="flex  items-center text-xs font-bold uppercase leading-snug text-gray-700  hover:opacity-75"
                  href="#"
                >
                  <span className="ml-2">About</span>
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
