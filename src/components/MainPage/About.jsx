import React from "react";
import { Tilt } from "react-tilt";

import { motion } from "framer-motion";
import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full transition-all">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className=" w-[95%] green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex 
        justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-22 h-22 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center hover:-translate-y-1 hover:scale-110 duration-200">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
