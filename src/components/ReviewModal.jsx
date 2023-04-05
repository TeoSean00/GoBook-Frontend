import React from "react";
import Button from "./Button";
import { HiOutlineStar } from "react-icons/hi2";

const ReviewModal = ({ setIsReviewOpen, review }) => {
  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div
        className="fixed inset-0 h-full w-full bg-black opacity-60 "
        onClick={() => setIsReviewOpen(false)}
      ></div>
      <div className="flex min-h-screen items-center px-4 py-8">
        <div className="relative mx-auto w-full max-w-md rounded-md bg-gray-50 px-4 pt-8 pb-4 text-gray-900 shadow-lg  dark:bg-gray-800 dark:text-white">
          <div className="rounded-lg border border-gray-200 p-3 shadow dark:border-gray-700 dark:shadow-gray-700">
            <div className="mt-2 text-center text-gray-800">
              <div className="mt-2 flex items-center gap-x-2 rounded-md bg-slate-100 p-1.5 text-blue-600 dark:bg-slate-700 dark:text-blue-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  stroke="currentColor"
                  className="h-10 w-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <div>
                  <span className="mt-0.5 block text-sm font-medium text-blue-600 dark:text-blue-300">
                    Anonymous User
                  </span>
                </div>
              </div>
              <div className=" flex items-center  py-2  text-yellow-300">
                {Array.from({ length: review.rating }, (_, i) => (
                  <HiOutlineStar fill="currentColor" className="w-4" key={i} />
                ))}
              </div>
              <p className=" pb-5 text-start text-sm leading-6 tracking-wider text-gray-800  dark:text-gray-200">
                "{review.reviewContent}"
              </p>
            </div>
          </div>
          <div className=" flex justify-end pt-4">
            <Button
              name="Back"
              color="gray"
              onClick={() => setIsReviewOpen(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;
