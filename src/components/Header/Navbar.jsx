import { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { logo } from "../../assets";
import resume from "/src/Abhishek's Resume.pdf";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { linkRef } = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  return (
    <nav
      className={`px-5 w-full flex justify-center items-center py-3 fixed top-0 z-30 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-black/20 shadow-lg border-b border-gray-800/50"
          : "backdrop-blur-md bg-transparent"
      }`}
    >
      <div className="glow-on-hover w-full flex justify-between border border-gray-600/30 rounded-xl px-4 py-2 items-center max-w-7xl bg-gray-900/10 hover:bg-gray-900/20 transition-all duration-300 hover:border-gray-500/50 hover:shadow-xl">
        <Link
          to="/"
          className="flex items-center gap-3 group"
          onClick={() => {
            setActive("/");
            window.scrollTo(0, 0);
          }}
        >
          <div className="relative">
            <img
              src={logo}
              alt="logo"
              className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
          </div>
          <div className="flex flex-col">
            <p className="text-white text-[18px] font-bold cursor-pointer group-hover:text-blue-400 transition-colors duration-300">
              Freelancer
            </p>
            <span className="text-gray-400 text-xs hidden sm:block group-hover:text-gray-300 transition-colors duration-300">
              Software Developer
            </span>
          </div>
        </Link>

        <ul className="list-none hidden sm:flex flex-row items-center gap-8">
          <a href={resume} download="Abhishek.pdf" className="group">
            <button className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2.5 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 border border-blue-500/20">
              <span className="relative z-10 flex items-center">
                <svg
                  className="fill-current w-4 h-4 mr-2 transition-transform duration-300 group-hover:scale-110"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                Download CV
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </button>
          </a>

          <Link
            ref={linkRef}
            to="/project"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className={`relative px-4 py-2 rounded-lg text-[16px] font-medium cursor-pointer transition-all duration-300 group ${
              active === "/project"
                ? "text-white bg-gray-800/50 shadow-md"
                : "text-gray-300 hover:text-white hover:bg-gray-800/30"
            }`}
          >
            <span className="relative z-10">Projects</span>
            <div
              className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${
                active === "/project"
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-100"
              }`}
            ></div>
          </Link>

          <Link
            ref={linkRef}
            to="/Experience"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className={`relative px-4 py-2 rounded-lg text-[16px] font-medium cursor-pointer transition-all duration-300 group ${
              active === "/Experience"
                ? "text-white bg-gray-800/50 shadow-md"
                : "text-gray-300 hover:text-white hover:bg-gray-800/30"
            }`}
          >
            <span className="relative z-10">Experience</span>
            <div
              className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${
                active === "/Experience"
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-100"
              }`}
            ></div>
          </Link>

          <Link
            to="/statistics"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className={`relative px-4 py-2 rounded-lg text-[16px] font-medium cursor-pointer transition-all duration-300 group ${
              active === "/statistics"
                ? "text-white bg-gray-800/50 shadow-md"
                : "text-gray-300 hover:text-white hover:bg-gray-800/30"
            }`}
          >
            <span className="relative z-10">Milestones</span>
            <div
              className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${
                active === "/statistics"
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-100"
              }`}
            ></div>
          </Link>

          <Link
            ref={linkRef}
            to="/play"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className={`relative px-4 py-2 rounded-lg text-[16px] font-medium cursor-pointer transition-all duration-300 group ${
              active === "/play"
                ? "text-white bg-gray-800/50 shadow-md"
                : "text-gray-300 hover:text-white hover:bg-gray-800/30"
            }`}
          >
            <span className="relative z-10">Playground</span>
            <div
              className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${
                active === "/play"
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-100"
              }`}
            ></div>
          </Link>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button
            onClick={() => setToggle(!toggle)}
            className="relative pt-5 w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600/50 hover:border-gray-500/50 transition-all duration-300 hover:scale-105 z-50"
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute block h-0.5 w-6 bg-white transform transition-all duration-300 ${
                  toggle ? "rotate-45 translate-y-0" : "-translate-y-2"
                }`}
              ></span>
              <span
                className={`absolute block h-0.5 w-6 bg-white transform transition-all duration-300 ${
                  toggle ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`absolute block h-0.5 w-6 bg-white transform transition-all duration-300 ${
                  toggle ? "-rotate-45 translate-y-0" : "translate-y-2"
                }`}
              ></span>
            </div>
          </button>

          {/* Enhanced backdrop overlay */}
          <div
            className={`${
              !toggle ? "opacity-0 invisible" : "opacity-60 visible"
            } fixed inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 backdrop-blur-sm transition-all duration-300 z-40`}
            onClick={() => setToggle(false)}
          />

          {/* Enhanced mobile menu */}
          <div
            className={`${
              !toggle
                ? "opacity-0 invisible scale-95 translate-y-[-20px]"
                : "opacity-100 visible scale-100 translate-y-0"
            } transform transition-all duration-300 ease-out absolute top-16 right-0 mx-4 my-2 min-w-[280px] z-50`}
          >
            <div className="bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-black/95 backdrop-blur-xl border border-gray-700/50 shadow-2xl rounded-2xl p-6 relative overflow-hidden">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 pointer-events-none"></div>

              <ul className="list-none flex justify-end items-start flex-col gap-3 relative z-10">
                <a
                  href={resume}
                  download="Abishek Abishek.pdf"
                  className="w-full group"
                >
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-[15px] font-semibold cursor-pointer transition-all duration-300 hover:scale-[1.02] rounded-lg px-4 py-3 border border-blue-500/20 hover:shadow-lg hover:shadow-blue-500/25">
                    <span className="flex items-center justify-center">
                      <svg
                        className="fill-current w-4 h-4 mr-2 transition-transform duration-300 group-hover:scale-110"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                      </svg>
                      Download CV
                    </span>
                  </button>
                </a>
                <Link
                  ref={linkRef}
                  to="/project"
                  onClick={() => {
                    setToggle(false);
                    window.scrollTo(0, 0);
                  }}
                  className={`${
                    active === "/project"
                      ? "text-white bg-gray-800/60 border-blue-500/50"
                      : "text-gray-300 border-transparent hover:border-gray-600/50"
                  } hover:text-white hover:bg-gray-800/40 text-[15px] font-medium cursor-pointer transition-all duration-300 w-full rounded-lg px-4 py-3 flex items-center border hover:scale-[1.02] group`}
                >
                  <span className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-3 transition-transform duration-300 group-hover:scale-110"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                    Projects
                  </span>
                  {active === "/project" && (
                    <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full"></div>
                  )}
                </Link>

                <Link
                  ref={linkRef}
                  to="/Experience"
                  onClick={() => {
                    setToggle(false);
                    window.scrollTo(0, 0);
                  }}
                  className={`${
                    active === "/Experience"
                      ? "text-white bg-gray-800/60 border-blue-500/50"
                      : "text-gray-300 border-transparent hover:border-gray-600/50"
                  } hover:text-white hover:bg-gray-800/40 text-[15px] font-medium cursor-pointer transition-all duration-300 w-full rounded-lg px-4 py-3 flex items-center border hover:scale-[1.02] group`}
                >
                  <span className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-3 transition-transform duration-300 group-hover:scale-110"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Experience
                  </span>
                  {active === "/Experience" && (
                    <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full"></div>
                  )}
                </Link>

                <Link
                  to="/statistics"
                  onClick={() => {
                    setToggle(false);
                    window.scrollTo(0, 0);
                  }}
                  className={`${
                    active === "/statistics"
                      ? "text-white bg-gray-800/60 border-blue-500/50"
                      : "text-gray-300 border-transparent hover:border-gray-600/50"
                  } hover:text-white hover:bg-gray-800/40 text-[15px] font-medium cursor-pointer transition-all duration-300 w-full rounded-lg px-4 py-3 flex items-center border hover:scale-[1.02] group`}
                >
                  <span className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-3 transition-transform duration-300 group-hover:scale-110"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M16 8v8a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2m8 4V6a2 2 0 00-2-2h-4m8 4h-8" />
                    </svg>
                    Highlights
                  </span>
                  {active === "/statistics" && (
                    <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full"></div>
                  )}
                </Link>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
