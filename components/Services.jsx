import React from "react";
import data from "../data/data";
import Service from "./Service";

function Services() {
    const services = data.services.list.map((service) => {
        return (
            <Service
                key={service.id}
                title={service.title}
                text={service.text}
            />
        );
    });

    return (
        <React.Fragment>
            <section className="services">{services}</section>
        </React.Fragment>
    );
}

export default Services;
