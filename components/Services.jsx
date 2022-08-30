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
            <div className="services__bottom-text">
                <p>
                    Todos os seres humanos nascem livres e iguais em dignidade e
                    direitos. São dotados de razão e consciência e devem agir em
                    relação uns aos outros com espírito de fraternidade. Todos
                    os
                </p>
            </div>
        </React.Fragment>
    );
}

export default Services;
