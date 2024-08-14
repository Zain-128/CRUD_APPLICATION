import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<p>Loading....</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
