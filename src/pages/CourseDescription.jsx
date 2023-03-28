import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import image from "../assets/courseImage.svg";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Booking from "../components/Booking";
import Button from "../components/Button";
const CourseDescription = () => {
  const state = useLocation().state;
  const { name, id } = useParams();
  const [courseDesc, setCourseDesc] = useState();
  const [parent, enableAnimations] = useAutoAnimate({ duration: 200 });

  const handleFetchCourseDescription = async (codeResponse) => {
    await axios
      .get(`http://localhost:5006/class/${id}`)
      .then((res) => {
        setCourseDesc(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    handleFetchCourseDescription();
  }, []);
  useEffect(() => {
    console.log("🚀 courseDesc:", courseDesc?.courseRuns);
  }, [courseDesc]);
  return (
    <Layout user={state}>
      <section
        ref={parent}
        className="mt-2  w-full  rounded-lg  border border-gray-200 bg-gray-50 shadow dark:border-gray-700 dark:bg-gray-800 lg:p-10"
      >
        {courseDesc ? (
          <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
            <div className="items-center justify-between md:flex">
              <h1 className="my-5 w-full text-center text-3xl font-extrabold leading-tight tracking-tight text-blue-700 dark:text-blue-600 md:mb-10 md:w-[85%] md:text-start lg:text-5xl">
                {name.replace(/-/g, " ")}
              </h1>
              <div className="mt-5 text-center md:mb-10 md:text-end">
                <Button name="Book" color="green" />
              </div>
            </div>
            <div className="mb-2 flex flex-col  justify-between  md:flex-row">
              <img src={image} className="mx-auto w-fit max-w-xs md:mx-0" />
              <div className=" flex justify-center  rounded-lg border border-gray-200 p-2 shadow dark:border-gray-700 dark:text-gray-50 md:w-[50%]">
                {courseDesc.courseRuns ? (
                  <Booking timeslots={Object.entries(courseDesc?.courseRuns)} />
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="mb-2 flex flex-col justify-between gap-y-5 rounded-lg border border-gray-200 p-5 text-gray-900 shadow dark:border-gray-700 dark:text-white  md:flex-row">
              <div className="w-full text-center text-2xl font-semibold">
                Course Fees{" "}
                <pre className="text-blue-700 dark:text-blue-600">
                  ${courseDesc.fees}
                </pre>
              </div>
              <div className="w-full text-center text-2xl font-semibold">
                Categories
                <div className="col-span-2 grid justify-center gap-y-2 pt-2 sm:grid-flow-col sm:gap-x-2">
                  {courseDesc.category.map((cat, ind) => {
                    return (
                      <button
                        key={ind}
                        className=" rounded-lg bg-blue-50 px-3 py-0.5 text-sm text-blue-600 duration-150 hover:bg-blue-100 active:bg-blue-200"
                      >
                        {cat}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="mb-2 justify-between rounded-lg border border-gray-200 p-5 shadow dark:border-gray-700">
              <h5 className="mb-2 text-center text-2xl font-semibold tracking-tight text-gray-900  dark:text-white md:text-start ">
                Course Content
              </h5>
              <p className="text-center text-lg font-light leading-relaxed tracking-wide  text-gray-700 dark:text-gray-400 md:text-start ">
                {courseDesc.content}
              </p>
            </div>
            <div className="mb-2 justify-between rounded-lg border border-gray-200 p-5 shadow dark:border-gray-700">
              <h5 className="mb-2 text-center text-2xl font-semibold tracking-tight text-gray-900  dark:text-white md:text-start ">
                Recommended Courses{" "}
              </h5>
              <p className="text-center text-lg font-light leading-relaxed tracking-wide  text-gray-700 dark:text-gray-400 md:text-start ">
                *Insert Recommended Courses component*
              </p>
            </div>
            {/* <div className="dark:text-gray-50">
              <pre className="overflow-hidden">
                {JSON.stringify(courseDesc, null, 2)}
              </pre>
            </div> */}
          </div>
        ) : (
          ""
        )}
      </section>
    </Layout>
  );
};

export default CourseDescription;
