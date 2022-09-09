import React from "react";
import data from "../data/data";
import Project from "./Project";
import { motion } from "framer-motion";

const projects = data.projects.projectList.map((project, i) => {
    return (
        <Project
            key={project.id}
            title={project.title}
            imgUrl={project.imgURL}
            techStack={project.techStack}
            siteUrl={project.siteURL}
            delay={i}
        />
    );
});

function Projects() {
    return (
        <section className="projects">
            <div className="projects__text">
                <p>{data.projects.text}</p>
            </div>
            <div className="projects__list">{projects}</div>
            <div className="block"></div>
        </section>
    );
}

export default Projects;
