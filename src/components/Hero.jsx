import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { toast } from "react-hot-toast";
const Hero = ({ user, setIsReviewForm }) => {
  return (
    <section className="mt-2  w-full  rounded-lg  border border-gray-200 bg-gray-50 p-10 shadow dark:border-gray-700 dark:bg-gray-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="pb-12 text-center text-gray-700 md:pb-16">
            <h1
              className="mb-4 text-4xl font-extrabold leading-tight tracking-tight dark:text-gray-200 md:text-6xl"
              data-aos="zoom-y-out"
            >
              Start your learning journey with{" "}
              <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent">
                Gobook
              </span>
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-600 dark:text-gray-400 md:text-xl"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Book your way to a brighter future with our hassle-free course
                booking!
              </p>
              <div
                className="mx-auto flex max-w-xs justify-center gap-x-2"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <Link to="/courses" state={user}>
                  <Button
                    name="Start Booking"
                    color={"blue"}
                    onClick={() => toast.success("Courses Page")}
                  />
                </Link>
                <Button
                  name="Write a review"
                  color={"gray"}
                  onClick={() => setIsReviewForm(true)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
