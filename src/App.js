import React from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Works from "./pages/Works";
import Reviews from "./pages/Reviews";
import Errorpage from "./pages/Errorpage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Career" element={<Career />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Works" element={<Works />} />
          <Route path="/Reviews" element={<Reviews />} />
          <Route path="*" element={<Errorpage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
