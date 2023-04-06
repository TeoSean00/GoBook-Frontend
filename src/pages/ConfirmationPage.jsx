import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
const ConfirmationPage = () => {
  return (
    <div className="min-h-screen  bg-gray-100 px-4 py-5 dark:bg-gray-800 sm:px-6 lg:px-8">
      <main className=" mx-auto w-full max-w-screen-sm font-sans  md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-2xl">
        <div className="w-full  rounded-lg  border border-gray-200 bg-gray-50 shadow dark:border-gray-700 dark:bg-gray-800 lg:p-10">
          <div className="rounded-md border-l-4 border-green-500 bg-green-50 px-4 md:m-4 md:mx-auto md:max-w-2xl md:py-5 md:px-8">
            <div className="flex flex-col justify-between py-3">
              <div className="flex">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 rounded-full text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3 self-center">
                  <span className="font-semibold text-green-600">
                    Payment Successful
                  </span>
                  <p className="mt-1 text-green-600">
                    You have successfully booked the course!
                  </p>
                </div>
              </div>
              <Link to="/" className="mt-4 flex justify-end">
                <Button
                  onClick={() => {
                    toast.success("Home page");
                  }}
                  name="Home"
                  color="blue"
                />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ConfirmationPage;
