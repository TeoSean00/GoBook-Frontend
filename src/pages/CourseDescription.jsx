import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";

const CourseDescription = () => {
  const state = useLocation().state;
  const { name } = useParams();
  const [courseDesc, setCourseDesc] = useState();

  return (
    <Layout user={state}>
      <h1 className="h-24 text-center font-normal text-gray-700 line-clamp-4 dark:text-gray-400 md:h-36 md:text-start md:line-clamp-6">
        Displaying description for {name}
      </h1>
    </Layout>
  );
};

export default CourseDescription;
