import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Who from "./components/Who";
import Footer from "./components/Footer";
import Learning from "./components/Learning";
import Faq from "../src/components/Faq";
import Testimonial from "../src/components/Testimonial";
import Contact from "../src/components/Contact";
import MentorSection from "./components/Mentor";  
import Amenit from "./components/Amenities";



export default function App() {
  return (
    <Routes>

      {/* --------------------------------------- */}
      {/* HOME PAGE ROUTE */}
      {/* --------------------------------------- */}
      <Route
        path="/"
        element={
          // FIXED: Added this wrapper div
          <div className="w-full overflow-x-hidden relative">
            <Header />
            <Hero />
            <About />
            <Amenit />
            
            <Testimonial />
            <Learning />
            <MentorSection/>
            <Faq />
            <Contact />
            <Footer />
          </div>
        }
      />

      {/* --------------------------------------- */}
      {/* INFO COURSES PAGES */}
      {/* --------------------------------------- */}
      {/* It is good practice to wrap these too if they have similar issues */}

      

      

      

    </Routes>
  );
}