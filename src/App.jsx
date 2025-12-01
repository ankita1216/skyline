import Header from "./components/Header";
import Hero from "./components/Hero";
import Courses from "./components/CoursesSection";
import Why from "./components/Why";
import Who from "./components/Who";
import Footer from "./components/Footer";
import Learning from "./components/Learning";
import Faq from "../src/components/Faq";
import Testimonial from "../src/components/Testimonial";
import Contact from "../src/components/Contact";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Courses />
      <Why/>
      <Who/>
      <Learning/>
      <Faq/>
      <Testimonial/>
      <Contact/>
      <Footer />
    </>
  );
}
