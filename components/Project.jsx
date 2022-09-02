import React from "react";
import bg from "../public/ab.jpg";
import { motion } from "framer-motion";

function Project({ title, imgUrl, techStack, siteUrl, delay }) {
    console.log(bg.src);
    return (
        <motion.div
            className="project"
            style={{
                background: `linear-gradient(to right ,#38b199, #38b199ab), url(${imgUrl})`,
                backgroundSize: "cover",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
        >
            <h3 className="project__title">{title}</h3>
            <span className="project__tech-stack">Teknologi: {techStack}</span>
            <a href={siteUrl} className="project__link">
                Se prosjektet
            </a>
        </motion.div>
    );
}

export default Project;
