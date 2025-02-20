import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";
import { styles } from "../../styles";

const TechCard = ({ index, icon , name}) => {
  return (
    <Tilt className="w-28 h-28 ">
      <div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className=" w-full green-pink-gradient rounded-lg p-[1px] shadow-card select-none"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-lg py-5 flex justify-evenly items-center flex-col"
        >
          <img src={icon} className="w-16 h-16 object-contain" />
          <h5 className="text-sm font-bold text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">{name}</h5>
        </div>
      </div>
    </Tilt>
  );
};

const Tech = () => {
  return (
    <>
      <div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>My tools</p>
        <h2 className={`${styles.sectionHeadText} text-center flux `}>
          My Tech Stack's
        </h2>
      </div>

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-20">
      {technologies.map((technology, index) => (
          <TechCard 
            key={technology.name} 
            index={index} 
            icon={technology.icon} 
            name={technology.name} 
          />
        ))}
      </div>  
    </>
  );
};

export default SectionWrapper(Tech, "tech");
