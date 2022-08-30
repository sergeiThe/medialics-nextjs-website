import React from "react";
import data from "../data/data";
import Form from "./Form";

function Contact() {
    return (
        <section className="contact">
            <p className="contact__text">{data.contact.text}</p>

            <Form />
            <div className="contact__info-box">
                <span>{data.contact.email}</span>
                <span>{data.contact.phone}</span>
                <span>{data.contact.address}</span>
            </div>
        </section>
    );
}

export default Contact;
