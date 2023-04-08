import React, { useState, useEffect } from "react";
import axios from "axios";
import CourseCardLayout from "./CourseCardLayout";
import CourseCard from "./CourseCard";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useLocation, Link } from "react-router-dom";

//socket io listener
import io from "socket.io-client";

const RecommendationCatalogue = ({ user }) => {
  const location = useLocation();
  const state = location.state;
  const [parent, enableAnimations] = useAutoAnimate({ duration: 200 });
  const [input, setInput] = useState("");
  const [recommendation, setRecommendation] = useState([]);

  useEffect(() => {
    const socket = io("http://localhost:8000", {
      path: "/consumer_service/socket.io",
    });
    // const socket = io("http://localhost:5011");

    socket.on("connect", () => {});

    socket.on("disconnect", () => {});

    socket.on("message", (data) => {
      if (data.userId == user._id) {
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
    if (recommendation !== undefined) {
      if (recommendation.length > 0) {
        updateRecommendedClasses(recommendation);
      }
    }
    console.log(recommendation);
  }, [recommendation]);

  const updateRecommendedClasses = async (classes) => {
    await axios
      .put(`http://localhost:8000/users/recc/${user._id}`, {
        recommended_classes: classes,
      })
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  };

  const getRecommendedClasses = async () => {
    await axios
      // to update with Kong route later
      .get(`http://localhost:8000/users/${user._id}`)
      .then((res) => {
        var recommended_classes = res.data.recommended_classes;
        setRecommendation(recommended_classes);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className="my-2  w-full rounded-lg border  border-gray-200 bg-gray-50 py-5 shadow dark:border-gray-700 dark:bg-gray-800 md:p-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h1
          className="mb-4 text-center text-4xl font-extrabold leading-tight tracking-tight dark:text-gray-200 md:text-5xl"
          data-aos="zoom-y-out"
        >
          Recommended Courses
        </h1>

        <div ref={parent} className="flex flex-col items-center ">
          {recommendation.length !== 0 ? (
            <CourseCardLayout>
              {recommendation
                ?.filter((course) => {
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
            <div className="py-12 ">
              <div className="text-center text-gray-700 md:pb-16">
                <h1 className="text-3xl font-medium leading-tight tracking-tight dark:text-gray-400">
                  No recommendations generated yet, book a class first!
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
