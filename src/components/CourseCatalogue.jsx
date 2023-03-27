import React, { useState, useEffect } from "react";
import axios from "axios";
import CourseCardLayout from "./CourseCardLayout";
import CourseCard from "./CourseCard";
const CourseCatalogue = () => {
  const [courseData, setCourseData] = useState();
  const handleFetchClassData = async (codeRes) => {
    await axios
      //configured api route to localhost:5006 for mac
      .get("http://localhost:5006/class")
      .then((res) => {
        setCourseData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    handleFetchClassData();
  }, []);
  useEffect(() => {
    console.log("🚀 courseData:", courseData);
  }, [courseData]);

  return (
    <section className="mt-2  w-full rounded-lg border  border-gray-200 bg-gray-50 py-5 shadow dark:border-gray-700 dark:bg-gray-800 md:p-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {" "}
        <div className="flex  flex-col items-center pb-10">
          {courseData ? (
            <CourseCardLayout>
              {courseData.map((course, ind) => {
                return <CourseCard key={ind} course={course} />;
              })}
            </CourseCardLayout>
          ) : (
            <div className="py-12 md:pt-40 md:pb-20">
              {/* Section header */}
              <div className="pb-12 text-center text-gray-700 md:pb-16">
                <h1
                  className="mb-4 text-3xl font-medium leading-tight tracking-tight dark:text-gray-200"
                  data-aos="zoom-y-out"
                >
                  Course data can only be accessed locally! <br /> Checkout our
                  <a
                    href="https://github.com/TeoSean00/ESD-ClassBookingSystem-Frontend"
                    className="cursor-alias"
                    target="_blank"
                  >
                    {" "}
                    <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
                      Github
                    </span>
                  </a>
                </h1>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CourseCatalogue;