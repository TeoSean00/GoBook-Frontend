import React, { useState, useEffect } from "react";
import ReviewCard from "./ReviewCard";
import { useParams } from "react-router-dom";

import axios from "axios";

const ReviewCatalogue = ({ setIsReviewOpen, setReviewContent }) => {
  const [reviews, setReviews] = useState();
  const { name, id } = useParams();

  const handleFetchClassReviews = async () => {
    await axios
      .get(`http://localhost:5004/review/class/${id}`)
      .then((res) => {
        setReviews(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // useEffect(() => {
  //   console.log(reviews == [], reviews);
  // }, [reviews]);

  useEffect(() => {
    handleFetchClassReviews();
  }, []);
  return (
    <>
      {reviews?.length !== 0 ? (
        <div className="grid items-center gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {reviews?.map((review) => {
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
        <div className=" flex items-center justify-center py-10 text-center text-gray-700 ">
          <h1 className="text-2xl font-medium leading-tight tracking-tight dark:text-gray-200">
            No reviews yet! Write a{" "}
            <span className="bg-gradient-to-r from-blue-800 to-blue-400 bg-clip-text text-transparent hover:cursor-alias">
              Review
            </span>
          </h1>
        </div>
      )}
    </>
  );
};

export default ReviewCatalogue;
