import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Amenities from "./components/Amenities";
import Plan from "./components/Plan";
import Gallery from "./components/Gallery";
import Location from "./components/Location";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="w-full overflow-x-hidden relative">
            {/* Header */}
            <Header />

            {/* Sections in SAME order as Header */}
            <Hero />

            <About />      {/* About */}
            <Amenities />  {/* Features */}
            <Plan />       {/* Plan */}
            <Gallery />    {/* Gallery */}
            <Location />   {/* Location */}
            <Contact />    {/* Contact */}

            {/* Footer */}
            <Footer />
          </div>
        }
      />
    </Routes>
  );
}
