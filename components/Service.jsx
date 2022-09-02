import React from "react";
import { GiEarthAfricaEurope } from "react-icons/gi";
import { SiGoogleads } from "react-icons/si";

function Service({ title, text }) {
    return (
        <div className="service">
            <span>
                {title === "Nettsted" ? (
                    <GiEarthAfricaEurope />
                ) : (
                    <SiGoogleads />
                )}
            </span>
            <h2 className="service__title">{title}</h2>
            <p className="service__text">{text}</p>
        </div>
    );
}

export default Service;
