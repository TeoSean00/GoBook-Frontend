import React from "react";
import { useLocation, Link } from "react-router-dom";
import Button from "../components/Button";
import Layout from "../components/Layout";
import {
  SiTailwindcss,
  SiAdobephotoshop,
  SiAmazonaws,
  SiReact,
  SiFigma,
  SiTypescript,
  SiPrisma,
} from "react-icons/si";
import CourseCard from "../components/CourseCard";

function ProfilePage() {
  const location = useLocation();
  const state = location.state;
  console.log("passed data is:", state);
  console.log(state.picture);

  const homePageRedirect = () => {
    console.log("Redirecting to Home Page now");
  };

  return (
    <Layout user={state}>
      <div className="mt-2  w-full  rounded-lg  border border-gray-200 bg-gray-50 p-10 shadow dark:border-gray-700 dark:bg-gray-800">
        <div className="flex  flex-col items-center pb-10">
          <img className="mb-3 h-24 w-24 rounded-full" src={state.picture} />
          <h5 className=" pb-1 text-center text-3xl font-bold capitalize dark:text-gray-50">
            {state.name}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {state.email}
          </span>
          <div className="mt-4 flex space-x-3 md:mt-6">
            <Button name="Make Booking" onClick={() => {}} />
          </div>
          <div className=" pt-10">
            <h5 className="pb-5 text-center text-xl font-bold dark:text-gray-300">
              Software Skills
            </h5>
            <div className="flex gap-x-3 dark:text-gray-50">
              <SiReact className="h-7 w-7" />
              <SiTypescript className="h-7 w-7" />
              <SiTailwindcss className="h-7 w-7" />
              <SiPrisma className="h-7 w-7" />
              <SiAmazonaws className="h-7 w-7" />
              <SiAdobephotoshop className="h-7 w-7" />
              <SiFigma className="h-7 w-7" />
            </div>
          </div>
          {/* Interests */}
          <div className=" pt-10">
            <h5 className="pb-5 text-center text-xl font-bold dark:text-gray-300">
              Interests
            </h5>
            <div className="grid grid-cols-3 gap-4 dark:text-gray-50 md:grid-cols-6">
              <span className="mr-2 flex items-center justify-center rounded bg-blue-700 px-2.5 py-0.5 text-center text-sm font-medium  text-gray-50 dark:bg-blue-600">
                Web 3.0
              </span>
              <span className="mr-2 flex items-center justify-center rounded bg-blue-700 px-2.5 py-0.5 text-center text-sm font-medium  text-gray-50 dark:bg-blue-600">
                UI/UX
              </span>
              <span className="mr-2 flex items-center justify-center rounded bg-blue-700 px-2.5 py-0.5 text-center text-sm font-medium  text-gray-50 dark:bg-blue-600">
                DevOps
              </span>
              <span className="mr-2 flex items-center justify-center rounded bg-blue-700 px-2.5 py-0.5 text-center text-sm font-medium  text-gray-50 dark:bg-blue-600">
                Big Data
              </span>
              <span className="mr-2 flex items-center justify-center rounded bg-blue-700 px-2.5 py-0.5 text-center text-sm font-medium  text-gray-50 dark:bg-blue-600">
                Coffee
              </span>
              <span className="mr-2 flex items-center justify-center rounded bg-blue-700 px-2.5 py-0.5 text-center text-sm font-medium  text-gray-50 dark:bg-blue-600">
                Travel
              </span>
            </div>
          </div>
          {/* Registered Classes */}
          <div className=" pt-10">
            <h5 className="pb-5 text-center text-xl font-bold  dark:text-gray-300">
              Registered Classes
            </h5>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
              {courses.map((course) => {
                return (
                  <CourseCard
                    courseName={course.name}
                    courseDesc={course.desc}
                  />
                );
              })}
            </div>
          </div>
          {/* Reviews */}
          {/* <div className=" pt-10">
            <h5 className="pb-5 text-center text-xl font-bold  dark:text-gray-300">
              Reviews
            </h5>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
              <a
                href=""
                className="block max-w-sm rounded-lg border border-gray-200 bg-white p-3 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:p-6"
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {" "}
                  Fullstack Web Development
                </h5>
                <blockquote className="text-sm font-semibold italic text-gray-900 dark:text-white">
                  <p>
                    "Flowbite is just awesome. It contains tons of predesigned
                    components and pages starting from login screen to complex
                    dashboard. Perfect choice for your next SaaS application."
                  </p>
                </blockquote>
              </a>

              <a
                href="#"
                className="block max-w-sm rounded-lg border border-gray-200 bg-white p-3 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:p-6"
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  UI/UX Design and Prototyping
                </h5>
                <blockquote className="text-sm font-semibold italic text-gray-900 dark:text-white">
                  <p>
                    "Flowbite is just awesome. It contains tons of predesigned
                    components and pages starting from login screen to complex
                    dashboard. Perfect choice for your next SaaS application."
                  </p>
                </blockquote>
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </Layout>
  );
}

export default ProfilePage;

//query from backend (each object should have another keyvalue pair for the route to its indiv page)
const courses = [
  {
    name: "Fullstack Web Development",
    desc: " Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  },
  {
    name: "UI/UX Design and Prototyping",
    desc: " Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  },
  {
    name: "Agile Software Development with Scrum",
    desc: " Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  },
  {
    name: "Data Science and Machine Learning with Python",
    desc: " Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  },
];
