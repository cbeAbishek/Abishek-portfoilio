import { useState } from "react";
import PropTypes from "prop-types";
import { Container, Wrapper, Desc, CardContainer } from "./ProjectStyle";
import ProjectCard from "../Cards/ProjectCards.jsx";
import { projects1 } from "../constants/index.js";
import { styles } from "../styles";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle] = useState("all");
  return (
    <Container id="projects" className="pt-20">
      <Wrapper className="bg-[#050816]">
        <h2
          className={`${styles.sectionHeadText} bg-[#050816] text-center md:mt-2 sm:mt-10   mb-[-20px] flux`}
        >
          Projects
        </h2>
        <Desc className={`${styles.sectionSubText} text-center  `}>
          I have worked on a wide range of projects. From web apps to android
          apps. Here are some of my projects.
        </Desc>
        <br></br>

        {/* 
        <ToggleButtonGroup>
          {toggle === "all" ? (
            <ToggleButton active value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          )}
          <Divider />
          {toggle === "full stack" ? (
            <ToggleButton
              active
              value="full stack"
              onClick={() => setToggle("full stack")}
            >
              Full Stack
            </ToggleButton>
          ) : (
            <ToggleButton
              value="full stack"
              onClick={() => setToggle("full stack")}
            >
              Full Stack
            </ToggleButton>
          )}
          <Divider />
          {toggle === "react" ? (
            <ToggleButton
              active
              value="react"
              onClick={() => setToggle("react")}
            >
              React
            </ToggleButton>
          ) : (
            <ToggleButton value="react" onClick={() => setToggle("react")}>
              React
            </ToggleButton>
          )}

          <Divider />
          {toggle === "javascript" ? (
            <ToggleButton
              active
              value="javascript"
              onClick={() => setToggle("javascript")}
            >
              JavaScript
            </ToggleButton>
          ) : (
            <ToggleButton
              value="javascript"
              onClick={() => setToggle("javascript")}
            >
              JavaScript
            </ToggleButton>
          )}
          <Divider />
          {toggle === "html" ? (
            <ToggleButton active value="html" onClick={() => setToggle("html")}>
              HTML&CSS
            </ToggleButton>
          ) : (
            <ToggleButton value="html" onClick={() => setToggle("html")}>
              HTML&CSS
            </ToggleButton>
          )}
        </ToggleButtonGroup> */}
        <CardContainer>
          {toggle === "all" &&
            projects1.map((project) => (
              <ProjectCard
                key={project.id} // Ensure 'id' is a unique identifier in your project object
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {projects1
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard
                key={project.id} // Ensure 'id' is a unique identifier in your project object
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};
Projects.propTypes = {
  openModal: PropTypes.bool.isRequired,
  setOpenModal: PropTypes.func.isRequired,
};

export default Projects;
