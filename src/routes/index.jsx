import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import ProfilePage from "../pages/ProfilePage";

const AppRoutes = () => (
    <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/profile" element={<ProfilePage />} />
    </Routes>
)

export default AppRoutes;