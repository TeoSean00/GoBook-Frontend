import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Courses from "../pages/Courses";
import PaymentPage from "../pages/PaymentPage";
import ProfilePage from "../pages/ProfilePage";
import CourseDescription from "../pages/CourseDescription";

const AppRoutes = () => (
  <Routes>
    <Route exact path="/" element={<App />} />
    <Route exact path="/profile" element={<ProfilePage />} />
    <Route exact path="/about" element={<About />} />
    <Route exact path="/courses" element={<Courses />} />
    <Route exact path="/payment" element={<PaymentPage />} />
    <Route exact path="/booking" element={<BookingPage />} />
    <Route exact path="/courses/:name/:id" element={<CourseDescription />} />
  </Routes>
);

export default AppRoutes;
