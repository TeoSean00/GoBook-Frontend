import React, { useState, useEffect } from "react";
import ReviewCard from "./ReviewCard";
const currDate = new Date();

const ReviewCatalogue = ({ setIsReviewOpen, setReviewContent }) => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      userId: "104803140206997669096",
      classId: "642267eccf6cd4f07576835b",
      date: currDate,
      rating: 4,
      reviewContent:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 2,
      userId: "104803140206997669096",
      classId: "642267eccf6cd4f07576835b",
      date: currDate,
      rating: 5,
      reviewContent:
        "This is NOT an all-inclusive template. We expect you to bring your own libraries that solve the needs of YOUR application. While we don’t want to prescribe solutions to more specific problems like state management and deployment, we do have some recommendations listed here.",
    },
    {
      id: 3,
      userId: "104803140206997669096",
      classId: "642267eccf6cd4f07576835b",
      date: currDate,
      rating: 3,
      reviewContent:
        "We’ll be frank - this is an opinionated project. We share a handful of core beliefs around building and we treat them as the basis for our decisions.",
    },
    {
      id: 4,
      userId: "104803140206997669096",
      classId: "642267eccf6cd4f07576835b",
      date: currDate,
      rating: 4,
      reviewContent:
        "After countless projects and many years on this tech, we have lots of opinions and insights. We’ve done our best to encode them into this CLI.",
    },
  ]);
  // const handleFetchClassReviews = async () => {
  //   await axios
  //     .get(`http://localhost:5004/review/class/${classId}`)
  //     .then((res) => {
  //       setReviews(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <div className="grid items-center gap-2 sm:grid-cols-2 lg:grid-cols-3">
      {reviews.map((review) => {
        return (
          <ReviewCard
            setIsReviewOpen={setIsReviewOpen}
            key={review.id}
            review={review}
            setReviewContent={setReviewContent}
          />
        );
      })}
      {/* <div className="block rounded-lg border border-gray-200 bg-white p-3 shadow  dark:border-slate-700 dark:bg-slate-800  ">
        <pre className="overflow-hidden">
          {JSON.stringify(reviews, null, 2)}
        </pre>
      </div> */}
    </div>
  );
};

export default ReviewCatalogue;
