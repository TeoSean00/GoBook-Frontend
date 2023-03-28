import React from "react";
import { useLocation } from "react-router-dom";
import Layout from "../components/Layout";
import CourseCatalogue from "../components/CourseCatalogue";
const Courses = () => {
  const state = useLocation().state;
  return (
    <Layout user={state}>
      <CourseCatalogue user={state} />
    </Layout>
  );
};

export default Courses;
