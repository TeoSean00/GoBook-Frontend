import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Button from "../components/Button";
import Layout from "../components/Layout";
import CourseCardLayout from "../components/CourseCardLayout";
import ReviewCard from "../components/ReviewCard";
import ReviewModal from "../components/ReviewModal";
import axios from "axios";
import CourseCard from "../components/CourseCard";
import {
  SiTailwindcss,
  SiAdobephotoshop,
  SiAmazonaws,
  SiReact,
  SiFigma,
  SiTypescript,
  SiPrisma,
} from "react-icons/si";

function ProfilePage() {
  const location = useLocation();
  const state = location.state;
  console.log("current state> ", state);
  const [userCourseData, setUserCourseData] = useState([]);
  const [userReviewData, setUserReviewData] = useState([]);
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [reviewContent, setReviewContent] = useState(null);

  const handleFetchUserClassData = async () => {
    await axios
      .get(`http://localhost:5006/class/getUserClass/${state._id}`)
      .then((res) => {
        console.log("user class data> ", res.data);
        setUserCourseData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    handleFetchUserClassData();
  }, []);

  const handleFetchUserReviewData = async () => {
    await axios
      .get(`http://localhost:5004/review/${state._id}`)
      .then((res) => {
        console.log("user review data> ", res.data);
        setUserReviewData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    handleFetchUserReviewData();
  }, []);

  return (
    <Layout user={state}>
      <div className="mt-2  w-full  rounded-lg  border border-gray-200 bg-gray-50 p-2  shadow dark:border-gray-700 dark:bg-gray-800 md:p-10">
        <div className="flex  flex-col items-center pb-10">
          <img className="mb-3 h-24 w-24 rounded-full" src={state.picture} />
          <h5 className=" pb-1 text-center text-3xl font-bold capitalize dark:text-gray-50">
            {state.name}
          </h5>
          <span className="text-md text-gray-500 dark:text-gray-400">
            {state.email}
          </span>
          <div className="mt-4 flex space-x-3 md:mt-6">
            <Link to="/courses" state={state}>
              <Button name="Make Booking" color="blue" />
            </Link>
          </div>
          <div className=" pt-10">
            <h5 className="pb-5 text-center text-2xl font-bold dark:text-gray-300">
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
            <h5 className="pb-5 text-center text-2xl font-bold dark:text-gray-300">
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
          {/* Courses Attended */}
          <div className=" pt-10">
            <h5 className="pb-5 text-center text-2xl font-bold dark:text-gray-300">
              Courses Attended
            </h5>
            {userCourseData.length != 0 ? (
              <CourseCardLayout>
                {userCourseData.map((course) => {
                  return (
                    <CourseCard
                      key={course["_id"]}
                      course={course}
                      user={state}
                    />
                  );
                })}
              </CourseCardLayout>
            ) : (
              <div className=" mb-1 flex items-center justify-center py-1 text-center text-gray-700 ">
                <h1 className="text-2xl font-medium leading-tight tracking-tight dark:text-gray-200">
                  No courses yet! Attend a{" "}
                  <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent hover:cursor-alias">
                    Course
                  </span>
                </h1>
              </div>
            )}
          </div>
          {/* Reviews Given */}
          <div className=" mt-1 pt-10 ">
            <h5 className="pb-5 text-center text-2xl font-bold dark:text-gray-300">
              Reviews Given
            </h5>
            {userReviewData.length != 0 ? (
              <div className="grid grid-cols-1 items-center gap-2 md:grid-cols-2 lg:grid-cols-3">
                {userReviewData.map((review) => {
                  return (
                    <ReviewCard
                      setIsReviewOpen={setIsReviewOpen}
                      key={review["_id"]["$oid"]}
                      review={review}
                      setReviewContent={setReviewContent}
                    />
                  );
                })}
              </div>
            ) : (
              <div className=" flex items-center justify-center py-1 text-center text-gray-700 ">
                <h1 className="text-2xl font-medium leading-tight tracking-tight dark:text-gray-200">
                  No reviews yet! Write a{" "}
                  <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent hover:cursor-alias">
                    Review
                  </span>
                </h1>
              </div>
            )}
          </div>
        </div>
        {isReviewOpen && reviewContent ? (
          <ReviewModal
            setIsReviewOpen={setIsReviewOpen}
            review={reviewContent}
          />
        ) : (
          ""
        )}
      </div>
    </Layout>
  );
}

export default ProfilePage;

//query from backend (each object should have another keyvalue pair for the route to its indiv page)
