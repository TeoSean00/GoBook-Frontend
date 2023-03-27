import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";

const CourseDescription = () => {
  const state = useLocation().state;
  const { name, id } = useParams();
  const [courseDesc, setCourseDesc] = useState();

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
    console.log("🚀 courseDesc:", courseDesc);
  }, [courseDesc]);
  return (
    <Layout user={state}>
      <h1 className="h-24 text-center font-normal text-gray-700 line-clamp-4 dark:text-gray-400 md:h-36 md:text-start md:line-clamp-6">
        Displaying description for {name}
      </h1>
    </Layout>
  );
};

export default CourseDescription;
