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

  useEffect(() => {
    handleFetchClassReviews();
  }, []);
  return (
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
  );
};

export default ReviewCatalogue;
