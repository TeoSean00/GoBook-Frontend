import React from "react";
import { useLocation } from "react-router-dom";
import Layout from "../components/Layout";
const Courses = () => {
  const state = useLocation().state;
  return (
    <Layout user={state}>
      <h1>Courses page</h1>
    </Layout>
  );
};

export default Courses;
