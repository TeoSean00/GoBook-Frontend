import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
const CourseCard = ({ course }) => {
  return (
    <div>
      <Link
        to=""
        className="block max-w-sm rounded-lg border border-gray-200 bg-white p-3 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:p-6"
      >
        <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white md:text-start">
          {course.className}
        </h5>
        <p className="text-center font-normal text-gray-700 dark:text-gray-400 md:text-start">
          {course.objective}
        </p>
        <div className="mt-4 flex items-center justify-evenly text-gray-900 dark:text-white md:justify-between">
          <span className="text-lg font-bold">${course.fees}</span>
          <Button name="Enroll Again" />
        </div>
      </Link>
    </div>
  );
};

export default CourseCard;
