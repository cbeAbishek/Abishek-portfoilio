import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  About,
  Contact,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Footer from "./components/Footer/Footer";
import { BsArrowUp } from "react-icons/bs";
import { Experience, Playground, Project } from "./pages";
import Statisticspage from "./components/MainPage/Statisticspage";

const App = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Tech />
              <About />
              <Works />
              <div className="relative z-0">
                <Contact />
                <StarsCanvas />
              </div>
              <Footer />
              {showBackToTop && (
                <button
                  className="fixed bottom-4 right-4 p-2 cursor-pointer backToTop"
                  onClick={handleBackToTop}
                >
                  <BsArrowUp />
                </button>
              )}
            </>
          }
        />

        {/* Other Pages */}
        <Route path="/project" element={<Project />} />
        <Route path="/play" element={<Playground />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/statistics" element={<Statisticspage />} />
        
      </Routes>
    </Router>
  );
};

export default App;
