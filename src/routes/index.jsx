import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Courses from "../pages/Courses";
import ProfilePage from "../pages/ProfilePage";
import CourseDescription from "../pages/CourseDescription";
import TestPurchase from "../components/TestPurchase";

const AppRoutes = () => (
  <Routes>
    <Route exact path="/" element={<App />} />
    <Route exact path="/profile" element={<ProfilePage />} />
    <Route exact path="/about" element={<About />} />
    <Route exact path="/courses" element={<Courses />} />
    <Route exact path="/courses/:name/:id" element={<CourseDescription />} />
    <Route exact path="/testPurchase" element={<TestPurchase />} />
  </Routes>
);

export default AppRoutes;
