import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import Login from "./pages/Login.jsx";
import AboutUs from "./pages/AboutUs.jsx";

const Layout = () => {
    
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route element={<LandingPage />} path="/" />
                    <Route element={<Login />} path="/login" />
                    <Route element={<AboutUs />} path="/about" />
                    <Route element={<h1>Not found!</h1>} path="*"/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Layout;
