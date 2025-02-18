import React from "react";
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { textVariant } from "../../utils/motion";
import { AiOutlineArrowRight } from "react-icons/ai";
import gitmap from "../../assets/gitmap.png";
import handloom from "../../assets/Handloom raja.mp4";
import cet1 from "../../assets/certificates/cet1.png";
import cet2 from "../../assets/certificates/cet2.jpeg";
import cet3 from "../../assets/certificates/cet3.jpeg";
import cet4 from "../../assets/certificates/cet4.jpeg";
import cet5 from "../../assets/certificates/cet5.png";
import cet6 from "../../assets/certificates/cet6.png";
import cet7 from "../../assets/certificates/cet7.jpg";
import cet8 from "../../assets/certificates/cet8.jpg";
import ach1 from "../../assets/certificates/ach1.jpg";
import ach2 from "../../assets/certificates/ach2.jpg";
import ach3 from "../../assets/certificates/ach3.jpg";
import ach4 from "../../assets/certificates/ach4.jpg";

const StatisticPage = () => {
  return (
    <>
      <div className="flex justify-between  mt-12 md:mt-2">
        <motion.div variants={textVariant()}>
          <div>
            <p className={`${styles.sectionSubText} mt-10`}>
              My work | Certificates | Achivements
            </p>
            <h2 className={`${styles.sectionHeadText} flux`}>Github Stats</h2>
          </div>
        </motion.div>

        <div
          className="flex justify-between "
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <a
            href="https://github.com/cbeAbishek"
            target="_blank"
            className={`${styles.sectionSubText} flex items-center`}
          >
            View More <AiOutlineArrowRight />
          </a>
        </div>
      </div>

      <div className="mt-10 flex items-center justify-center flex-wrap gap-20">
        <div className="abhishek">
          <img
            width="100%"
            src="https://github-readme-stats.vercel.app/api?username=cbeAbishek&show_icons=true&theme=tokyonight"
          />
          <img
            width="100%"
            src="https://github-readme-streak-stats.herokuapp.com/?user=cbeabishek&theme=tokyonight"
          />

          <img src={gitmap} width={500} alt="" />

          <a
            href="#"
            target="_blank "
            className=" flex justify-start items-center gap-12 mt-5"
          >
            <span className="abhishek-btn">⭐⭐⭐⭐⭐</span>
          </a>
        </div>
      </div>
      <div className="mt-10 flex-row items-center justify-items-center">
        <motion.div variants={textVariant()}>
          <div className="flex justify-between  mt-12 md:mt-2">
            <h2 className={`${styles.sectionHeadText} flux`}>Video</h2>
          </div>
        </motion.div>

        <video class="mt-5 h-sm w-sm rounded-lg" controls>
          <source src={handloom} type="video/mp4" />
        </video>
      </div>


      <div className="mt-10 flex-row items-center justify-items-center">
      <motion.div variants={textVariant()}>
          <div className="flex justify-between  mt-12 md:mt-2">
            <h2 className={`${styles.sectionHeadText} flux`}>Achivements</h2>
          </div>
        </motion.div>
        <div className="flex flex-wrap gap-10 place-content-center">
        <img
            className="bg-cyan-500 shadow-xl shadow-cyan-500/50 mt-10 h-48 w-64 max-w-sm transition-all duration-300 rounded-lg blur-sm hover:blur-none"
            src={ach1}
            alt="image description"
          ></img>
        <img
            className="bg-cyan-500 shadow-xl shadow-cyan-500/50 mt-10 h-48 w-64 max-w-sm transition-all duration-300 rounded-lg blur-sm hover:blur-none"
            src={ach2}
            alt="image description"
          ></img>
        <img
            className="bg-cyan-500 shadow-xl shadow-cyan-500/50 mt-10 h-48 w-64 max-w-sm transition-all duration-300 rounded-lg blur-sm hover:blur-none"
            src={ach3}
            alt="image description"
          ></img>
        <img
            className="bg-cyan-500 shadow-xl shadow-cyan-500/50 mt-10 h-48 w-64 max-w-sm transition-all duration-300 rounded-lg blur-sm hover:blur-none"
            src={ach4}
            alt="image description"
          ></img>
        </div>
      </div>


      <div className="mt-10 flex-row items-center justify-items-center">
        <motion.div variants={textVariant()}>
          <div className="flex justify-between  mt-12 md:mt-2">
            <h2 className={`${styles.sectionHeadText} flux`}>Certificates</h2>
          </div>
        </motion.div>

        <div className="flex flex-wrap gap-10 place-content-center">
          <img
            className="bg-cyan-500 shadow-xl shadow-cyan-500/50 mt-10 h-48 w-64 max-w-sm transition-all duration-300 rounded-lg blur-sm hover:blur-none"
            src={cet1}
            alt="image description"
          ></img>
          <img
            className="bg-cyan-500 shadow-xl shadow-cyan-500/50 mt-10 h-48 w-64 max-w-sm transition-all duration-300 rounded-lg blur-sm hover:blur-none"
            src={cet2}
            alt="image description"
          ></img>
          <img
            className="bg-cyan-500 shadow-xl shadow-cyan-500/50 mt-10 h-48 w-64 max-w-sm transition-all duration-300 rounded-lg blur-sm hover:blur-none"
            src={cet3}
            alt="image description"
          ></img>
          <img
            className="bg-cyan-500 shadow-xl shadow-cyan-500/50 mt-10 h-48 w-64 max-w-sm transition-all duration-300 rounded-lg blur-sm hover:blur-none"
            src={cet4}
            alt="image description"
          ></img>
          <img
            className="bg-cyan-500 shadow-xl shadow-cyan-500/50 mt-10 h-48 w-64 max-w-sm transition-all duration-300 rounded-lg blur-sm hover:blur-none"
            src={cet5}
            alt="image description"
          ></img>
          <img
            className="bg-cyan-500 shadow-xl shadow-cyan-500/50 mt-10 h-48 w-64 max-w-sm transition-all duration-300 rounded-lg blur-sm hover:blur-none"
            src={cet6}
            alt="image description"
          ></img>
          <img
            className="bg-cyan-500 shadow-xl shadow-cyan-500/50 mt-10 h-48 w-64 max-w-sm transition-all duration-300 rounded-lg blur-sm hover:blur-none"
            src={cet7}
            alt="image description"
          ></img>
          <img
            className="bg-cyan-500 shadow-xl shadow-cyan-500/50 mt-10 h-48 w-64 max-w-sm transition-all duration-300 rounded-lg blur-sm hover:blur-none"
            src={cet8}
            alt="image description"
          ></img>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(StatisticPage, "");
