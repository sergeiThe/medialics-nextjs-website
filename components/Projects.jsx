import React from "react";
import data from "../data/data";
import Project from "./Project";

const projects = data.projects.projectList.map((project) => {
    return (
        <Project
            key={project.id}
            title={project.title}
            techStack={project.techStack}
            siteUrl={project.siteURL}
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
