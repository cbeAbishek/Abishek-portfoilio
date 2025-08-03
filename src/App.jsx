import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import ResumePDFView from "./components/resume/resume_pdfview";

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
      <div className="relative z-0 bg-primary">
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
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
                    className="fixed bottom-4 right-4 p-2 cursor-pointer backToTop z-50"
                    onClick={handleBackToTop}
                  >
                    <BsArrowUp />
                  </button>
                )}
              </>
            }
          />
          <Route
            path="/project"
            element={
              <>
                <Navbar />
                <Project />
                <Footer />
              </>
            }
          />
          <Route
            path="/play"
            element={
              <>
                <Navbar />
                <Playground />
                <Footer />
              </>
            }
          />
          <Route
            path="/experience"
            element={
              <>
                <Navbar />
                <Experience />
                <Footer />
              </>
            }
          />
          <Route
            path="/statistics"
            element={
              <>
                <Navbar />
                <Statisticspage />
                <Footer />
              </>
            }
          />
          <Route
            path="/resume"
            element={
              <>
                <Navbar />
                <ResumePDFView />
                <Footer />
              </>
            }
          />
          {/* Catch all route for 404 */}
          <Route
            path="*"
            element={
              <>
                <Navbar />
                <div className="flex items-center justify-center min-h-screen">
                  <h1 className="text-white text-4xl">Page Not Found</h1>
                </div>
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
