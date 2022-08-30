import React from "react";

function Service({ title, text }) {
    return (
        <div className="service">
            <h2 className="service__title">{title}</h2>
            <p className="service__text">{text}</p>
            <button className="page-button">Kontakt</button>
        </div>
    );
}

export default Service;
