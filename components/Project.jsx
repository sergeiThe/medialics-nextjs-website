import React from "react";

function Project({ title, techStack, siteUrl }) {
    return (
        <div className="project">
            <h3 className="project__title">{title}</h3>
            <span className="project__tech-stack">Teknologi: {techStack}</span>
            <a href={siteUrl} className="project__link">
                Se prosjektet
            </a>
        </div>
    );
}

export default Project;
