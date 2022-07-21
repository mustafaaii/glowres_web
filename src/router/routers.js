import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Blog from "../pages/blog";
import Contact from "../pages/contact";
import Profile from "../pages/profile";
import Footer from "../components/footer";
import Header from "../components/header";
import Scrollup from "../components/scrollup";
import Detail from "../pages/detail";
import Project from "../pages/project";

const Routers = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/porfolio" element={<Profile />} />
                <Route path="/project" element={<Project />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/:name/:id" element={<Detail />} />
            </Routes>
            <Scrollup />
            <Footer />
        </>
    )
}
export default Routers;