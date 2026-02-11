import { Routes, Route } from "react-router-dom";
import { useState } from "react";


import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Amenities from "./components/Amenities";
import Plan from "./components/Plan";
import Gallery from "./components/Gallery";
import Location from "./components/Location";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThankYou from "./components/ThankYou";


export default function App() {
  return (
    <Routes>
      
      {/* HOME PAGE */}
      <Route
        path="/"
        element={
          <div className="w-full overflow-x-hidden relative">
            <Header />
            <Hero />
            <About />
            <Amenities />
            <Plan />
            <Gallery />
            <Location />
            <Contact />
            <Footer />
          </div>
        }
      />

      {/* ✅ ADD THIS THANK YOU ROUTE HERE */}
      <Route
        path="/thank-you"
        element={<ThankYou />}
      />

    </Routes>
  );
}
