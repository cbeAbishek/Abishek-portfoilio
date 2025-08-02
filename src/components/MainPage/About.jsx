import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
//import { BsLinkedin } from "react-icons/bs";
//import { FaWhatsapp } from "react-icons/fa";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    options={{
      max: 25,
      scale: 1.05,
      speed: 450,
    }}
    className="xs:w-[300px] w-full transition-all group"
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.3, 0.75)}
      className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black p-[2px] rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:shadow-blue-500/30"
    >
      <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-3xl py-10 px-8 min-h-[340px] flex justify-center items-center flex-col relative overflow-hidden border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300">
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Icon container with glow */}
        <div className="relative mb-8 p-5 rounded-2xl group-hover:border-blue-500/40 transition-all duration-300">
          <img
            src={icon}
            alt={title}
            className="w-24 h-24 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
        </div>

        <h3 className="text-white text-[20px] font-bold text-center leading-relaxed transition-all duration-300 group-hover:text-blue-300 relative z-10">
          {title}
        </h3>

        {/* Subtle animated border */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full"></div>
      </div>
    </motion.div>
  </Tilt>
);

ServiceCard.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

const About = () => {
  return (
    <div className="relative">
      {/* Header Section */}
      <motion.div variants={textVariant()} className="text-center mb-16 px-4">
        <p className="text-gray-400 text-[14px] sm:text-[16px] uppercase tracking-wider mb-4">
          Introduction
        </p>
        <h2 className="text-white font-black text-[30px] sm:text-[40px] lg:text-[50px] mb-8 leading-tight">
          Overview<span className="text-blue-500">.</span>
        </h2>

        {/* Enhanced description */}
        <div className="max-w-4xl mx-auto">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="text-gray-300 text-[16px] sm:text-[18px] leading-relaxed mb-8 text-left sm:text-center"
          >
            I&apos;m a passionate{" "}
            <span className="text-blue-400 font-semibold">
              Software Developer
            </span>{" "}
            with extensive experience in building scalable web applications and
            modern digital solutions. My expertise spans across
            <span className="text-purple-400 font-semibold">
              {" "}
              frontend frameworks
            </span>
            ,
            <span className="text-green-400 font-semibold">
              {" "}
              backend technologies
            </span>
            , and
            <span className="text-yellow-400 font-semibold">
              {" "}
              cloud platforms
            </span>
            .
          </motion.p>

          <motion.p
            variants={fadeIn("", "", 0.2, 1)}
            className="text-gray-400 text-[15px] sm:text-[16px] leading-relaxed mb-10 text-left sm:text-center"
          >
            I specialize in creating intuitive user interfaces, robust backend
            systems, and seamless user experiences. My approach combines
            technical excellence with creative problem-solving to deliver
            solutions that not only meet requirements but exceed expectations.
            Let&apos;s collaborate to bring your ideas to life!
          </motion.p>
        </div>
      </motion.div>

      {/* Services Cards */}
      <motion.div
        variants={fadeIn("up", "spring", 0.4, 0.75)}
        className="flex flex-wrap gap-8 justify-center px-4 sm:px-8"
      >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </motion.div>

      {/* Call to Action */}
      <motion.div
        variants={fadeIn("up", "spring", 0.6, 0.75)}
        className="text-center mt-16 px-4 sm:px-8"
      >
        <div className="max-w-3xl mx-auto mt-12 p-10 rounded-3xl bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-lg border border-gray-700/40 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-white text-[22px] sm:text-[26px] font-bold mb-6">
            Ready to Start Your Project?
          </h3>
          <p className="text-gray-400 text-[15px] sm:text-[17px] mb-8 leading-relaxed">
            Let&apos;s discuss how I can help bring your vision to life with
            cutting-edge technology and innovative solutions.
          </p>

          {/* <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
            <a
              href="https://www.linkedin.com/in/abishek2005"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 flex items-center gap-3"
            >
              <BsLinkedin className="w-6 h-6" />
              LinkedIn Profile
            </a>
            <a
              href="https://wa.me/+919566372450"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/30 flex items-center gap-3"
            >
              <FaWhatsapp className="w-6 h-6" />
              WhatsApp
            </a>
          </div> */}
        </div>
      </motion.div>
    </div>
  );
};

const AboutWithWrapper = SectionWrapper(About, "about");
export default AboutWithWrapper;
