import React, { useState, useEffect } from "react";
import axios from "axios";
import CourseCardLayout from "./CourseCardLayout";
import CourseCard from "./CourseCard";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Searchbar from "./Searchbar";

//socket io listener
import io from "socket.io-client";

const RecommendationCatalogue = ({ user }) => {
  const [courseData, setCourseData] = useState();
  const [parent, enableAnimations] = useAutoAnimate({ duration: 200 });
  const [input, setInput] = useState("");
  const [recommendation, setRecommendation] = useState();
  const [viewRecommedation, setViewRecommedation] = useState(false);

  useEffect(() => {
    const socket = io("http://localhost:5011");

    socket.on("connect", () => {
      console.log("WebSocket connection opened");
    });

    socket.on("disconnect", () => {
      console.log("WebSocket connection closed");
    });

    socket.on("message", (data) => {
      console.log("Received message:", data);
      if (data.userId == "user3") {
        setRecommendation(data.recommendation);
      }
      
      // Update the React state or UI based on the message data
    });
    getRecommendedClasses();
    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    console.log("recommendation is", recommendation);
    if (recommendation !== undefined ){
      if (recommendation.length > 0){
        console.log("recommendation is", recommendation);
        updateRecommendedClasses(recommendation);
      }
    }
  }, [recommendation])

  const updateRecommendedClasses = async (classes) => {
    await axios
    .put(`http://localhost:5001/users/addrecc/114532673980137782859`, {recommended_classes: classes})
    .then((res) => {
      console.log("Response is " + res);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  const getRecommendedClasses = async () => {
    await axios
    .get(`http://localhost:5001/getUser/114532673980137782859`)
    .then((res) => {
      var recommended_classes = res.data.recommended_classes
      setRecommendation(recommended_classes);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  // const handleFetchClassData = async (codeRes) => {
  //   await axios
  //     //configured api route to localhost:5006 for mac
  //     .get("http://localhost:5006/class")
  //     .then((res) => {
  //       setCourseData(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  // useEffect(() => {
  //   handleFetchClassData();
  // }, []);
  // useEffect(() => {
  //   console.log("🚀 courseData:", courseData);
  // }, [courseData]);

  return (
    <section className="mt-2  w-full rounded-lg border  border-gray-200 bg-gray-50 py-5 shadow dark:border-gray-700 dark:bg-gray-800 md:p-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {" "}
        <h1
          className="mb-4 text-center text-4xl font-extrabold leading-tight tracking-tight dark:text-gray-200 md:text-5xl"
          data-aos="zoom-y-out"
        >
          Recommended Courses
        </h1>{" "}
        <div ref={parent} className="flex  flex-col items-center pb-10">
          {recommendation ? (
            <CourseCardLayout>
              {recommendation
                .filter((course) => {
                  if (input === "") return course;
                  else {
                    return course.className.toLowerCase().includes(input);
                  }
                })
                .map((course) => {
                  return (
                    <CourseCard
                      key={course["_id"]}
                      course={course}
                      user={user}
                    />
                  );
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
                  No Recommended Classes yet! <br />
                </h1>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RecommendationCatalogue;
