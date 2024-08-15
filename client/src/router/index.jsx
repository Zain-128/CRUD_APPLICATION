import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Todos = lazy(() => import("../pages/Todos"));
const Signup = lazy(() => import("../pages/SignUp"));
const Signin = lazy(() => import("../pages/Signin"));

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<p>Loading....</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
