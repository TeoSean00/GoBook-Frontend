import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
const ReviewModal = ({ setIsReviewForm, user }) => {
  const [userCourseData, setUserCourseData] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData);
    // console.log(payload);
    await axios
    //  able to submit on kong route
      .post(`http://localhost:8000/reviews`, {
        userId: user["_id"],
        classId: payload.course,
        date: currentDate,
        rating: payload.rating,
        reviewContent: payload.review,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    setIsReviewForm(false);
    toast.success("Review Submitted");
  };
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;

  //get courses user has attened
  const getCoursesTaken = async () => {
    await axios
      // currently since db has no classes attended, ui wont display
      .get(`http://localhost:8000/classes/getUserClass/${user._id}`)
      .then((res) => {
        console.log("user class data> ", res.data);
        setUserCourseData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getCoursesTaken();
  }, []);
  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div
        className="fixed inset-0 h-full w-full bg-black opacity-60 "
        onClick={() => setIsReviewForm(false)}
      ></div>
      <div className="flex min-h-screen items-center px-4 py-8">
        <form
          onSubmit={handleSubmit}
          className="relative mx-auto w-full max-w-md rounded-md bg-gray-50 px-4 pt-8 pb-4 text-gray-900 shadow-lg  dark:bg-gray-800 dark:text-white"
        >
          <div className="rounded-lg border border-gray-200 p-3 shadow dark:border-gray-700 dark:shadow-gray-700">
            <>
              <div className="mb-6">
                <label
                  htmlFor="course"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select course attended
                </label>
                <select
                  id="course"
                  name="course"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                >
                  {userCourseData?.map((course) => {
                    return (
                      <option key={course["_id"]} value={course["_id"]}>
                        {course.className.replace(/-/g, " ")}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="rating"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select an rating
                </label>
                <select
                  id="rating"
                  name="rating"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                >
                  <option defaultValue="true" value="5">
                    5
                  </option>
                  <option value="4">4</option>
                  <option value="3">3</option>
                  <option value="2">2</option>
                  <option value="1">1</option>
                </select>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="default-input"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Write your Review
                </label>
                <input
                  type="text"
                  id="default-input"
                  name="review"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                />
              </div>
            </>
          </div>
          <div className="flex justify-end">
            <button
              className="mt-4 w-fit rounded-lg bg-green-700 px-5 py-2.5 text-sm font-medium text-gray-50  duration-150 hover:bg-green-800       focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewModal;
