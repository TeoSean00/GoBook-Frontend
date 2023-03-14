import React from "react";
import { Link } from "react-router-dom";
const CourseCard = ({ courseName, courseDesc, courseLink }) => {
  return (
    <div>
      <Link
        to=""
        className="block max-w-sm rounded-lg border border-gray-200 bg-white p-3 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:p-6"
      >
        <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white md:text-start">
          {courseName}
        </h5>
        <p className="text-center font-normal text-gray-700 dark:text-gray-400 md:text-start">
          {courseDesc}
        </p>
      </Link>
    </div>
  );
};

export default CourseCard;
