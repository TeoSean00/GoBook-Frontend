import React, { useState, useEffect } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { toast } from "react-hot-toast";

export default function Navbar({ user }) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [parent, enableAnimations] = useAutoAnimate({ duration: 100 });
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });
  return (
    <>
      <nav className="  mx-auto rounded-lg border border-gray-200 bg-gray-50 py-3 px-5 shadow dark:border-gray-700 dark:bg-gray-800">
        <div className=" mx-auto flex flex-wrap items-center  justify-between gap-x-5  md:flex-nowrap">
          <div className="w-full flex-grow justify-between gap-x-2 md:flex">
            <div className="flex justify-between">
              <div className="flex gap-x-3">
                <Link
                  to="/"
                  onClick={() => {
                    toast.success("Home page");
                  }}
                  className="block self-center whitespace-nowrap text-xl font-semibold text-blue-700 hover:cursor-alias dark:text-gray-50"
                >
                  GoBook
                </Link>
                <Link
                  to="/profile"
                  state={user}
                  onClick={() => {
                    toast.success("Profile Page");
                  }}
                  className="flex cursor-alias  items-center justify-center rounded  text-gray-700 dark:text-gray-400  dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                >
                  <img
                    className=" h-7 w-7 rounded-full "
                    src={user?.picture}
                    alt="profile image"
                  />
                </Link>
              </div>
              <button
                className=" block cursor-pointer  rounded border border-solid border-transparent bg-transparent px-1 py-1 text-xl leading-none text-gray-700 outline-none hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 md:hidden"
                type="button"
                onClick={() => {
                  setNavbarOpen(!navbarOpen);
                }}
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
            <div ref={parent}>
              {windowSize[0] > 768 || navbarOpen ? (
                <ul className="ml-auto mt-2 flex list-none flex-col  gap-y-1 md:mt-0 md:flex-row md:gap-x-5">
                  <li className="">
                    <Link
                      to="/courses"
                      state={user}
                      onClick={() => {
                        toast.success("Courses page");
                      }}
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
                </ul>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
