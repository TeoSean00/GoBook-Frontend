import React from "react";
import { useLocation } from "react-router-dom";

import Layout from "../components/Layout";

const About = () => {
  const state = useLocation().state;
  return (
    <Layout user={state}>
      <h1>About page</h1>
    </Layout>
  );
};

export default About;
