import { useRef } from "react";
import { useTypewriter } from "react-simple-typewriter";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { Link } from "react-router-dom";
import { styles } from "../../styles";

import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FaSquareThreads } from "react-icons/fa6";

import PropTypes from "prop-types";

const ServiceCard = ({ index }) => (
  <Tilt className="xs:w-[250px] w-full ">
    <motion.div
      drag
      dragConstraints={{
        left: -200,
        top: -200,
        right: 100,
        down: -100,
      }}
      whileDrag={{ scale: 1.2 }}
      dragElastic={0.2}
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className=""
    >
      <div
        data-tilt-options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="w-full "
      >
        <div className="abhishek hover:hoverAbhishekbg flex items-center justify-center lg:w-96 lg:h-96 w-[12.5rem] h-[12.5rem] max-[350px]:w-[10.5rem] max-[350px]:h-[10.5rem] mx-auto bg-gradient-to-b from-blue-800 via-purple-700 to-red-700 hero-animation will-change-transform shadow-card   ">
          <div className="bg-avatar Abhishekbg hover:bg-avatar1 bg-cover bg-no-repeat bg-[50%]  justify-self-center lg:w-[374px] lg:h-[374px] w-48 h-48 max-[350px]:w-40 max-[350px]:h-40 hero-animation will-change-transform " />
        </div>
      </div>
    </motion.div>
  </Tilt>
);

const Hero = () => {
  const ref = useRef(null);
  // Removed unused state variables

  const [text] = useTypewriter({
    words: [
      "I'm a UI Designer",
      "I'm a Digital Marketer",
      "I'm an SEO Specialist",
      "I'm a Content Creator",
      "I'm a Video Editor",
      "I'm a Graphic Designer",
      "I'm a 3D Modeler",
      "I'm a Python Developer",
      "I'm a Web Developer",
      "I'm an Event Manager",
      "PixelPerfection.jsx",
      "<CodeAndCreate />",
      "VisionaryDev.py",
      "MarketingNinja.tsx",
      "UI_UX_Obsessed",
      "ByteSizedContent",
    ],
    loop: true,
    delaySpeed: 1000,
  });

  return (
    <section className="w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} cursor-pointer  h-screen max-w-7xl mx-auto flex lg:flex-row flex-col-reverse  pl-25 md:pl-10 sm:mt-10 sm:justify-center items-start  md:gap-20 gap-5  pt-20`}
      >
        <div>
          <div className="flex gap-3 ">
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
              <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
            </div>

            <div className="lg:w-[32rem]">
              <h1 className={`${styles.heroHeadText} text-white`}>
                Hi, I&apos;m <br />
                <span className=" animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black">
                  Abishek
                </span>
              </h1>

              <p
                className={`${styles.heroSubText} h-8 mt-2 text-white-100 max-w-lg`}
              >
                {text}{" "}
              </p>
            </div>
          </div>

          <div className="text-[30px] md:text-[35px] flex justify-center gap-5 items-center md:mt-10 mt-8 md:gap-12 cursor-pointer mb-20 ">
            <Link
              target="_blank"
              to="https://www.linkedin.com/in/abishek2005"
              className="group relative"
            >
              {" "}
              <BsLinkedin className="text-white mr-2 transition-transform duration-200 ease-in group-hover:translate-y-[-2px] group-hover:rotate-[25deg] group-hover:text-red-400" />
            </Link>

            <Link
              target="_blank"
              to="https://github.com/cbeAbishek"
              className="group relative"
            >
              <BsGithub className="text-white mr-2 transition-transform duration-200 ease-in group-hover:translate-y-[-2px] group-hover:rotate-[25deg] group-hover:text-red-400" />
            </Link>

            <Link
              target="_blank"
              to="https://www.instagram.com/smakabhishek"
              className="group relative"
            >
              <BsTwitter className="text-white mr-2 transition-transform duration-200 ease-in group-hover:translate-y-[-2px] group-hover:rotate-[25deg] group-hover:text-red-400 " />
            </Link>
            <Link
              target="_blank"
              to="https://discord.gg/x5YGmHKN"
              className="group relative"
            >
              <BsDiscord className="text-white mr-2 transition-transform duration-200 ease-in group-hover:translate-y-[-2px] group-hover:rotate-[25deg] group-hover:text-red-400" />
            </Link>

            <Link
              target="_blank"
              to="https://www.instagram.com/smakabhishek"
              className="group relative"
            >
              <BsInstagram className="text-white mr-2 transition-transform duration-200 ease-in group-hover:translate-y-[-2px] group-hover:rotate-[25deg] group-hover:text-red-400" />
            </Link>

            <Link
              target="_blank"
              to="https://www.threads.net/@smakabhishek"
              className="group relative"
            >
              <FaSquareThreads className="text-white mr-2 transition-transform duration-200 ease-in group-hover:translate-y-[-2px] group-hover:rotate-[25deg] group-hover:text-red-400" />
            </Link>
          </div>
        </div>

        <div ref={ref} className="w-full mt-10 ">
          <ServiceCard reference={ref} />
        </div>
      </div>
    </section>
  );
};

ServiceCard.propTypes = {
  index: PropTypes.number.isRequired,
};

export default Hero;
