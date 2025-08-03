import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
      <div className="App">
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
          <Route path="/project" element={<Project />} />
          <Route path="/play" element={<Playground />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/statistics" element={<Statisticspage />} />
          <Route path="/resume" element={<ResumePDFView />} />
          {/* Catch-all route for 404 */}
          <Route
            path="*"
            element={
              <div className="min-h-screen bg-primary flex items-center justify-center">
                <div className="text-white text-center">
                  <h1 className="text-2xl mb-4">Page Not Found</h1>
                  <a
                    href="/"
                    className="px-4 py-2 bg-blue-600 text-white rounded"
                  >
                    Go Home
                  </a>
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
