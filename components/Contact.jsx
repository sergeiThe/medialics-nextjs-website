import React, { useRef } from "react";
import data from "../data/data";
import Form from "./Form";
import { BiMailSend, BiPhone, BiCurrentLocation } from "react-icons/bi";

function Contact() {
    return (
        <section className="contact">
            <p className="contact__text">{data.contact.text}</p>

            <Form />
            <div className="contact__info-box">
                <span>
                    <BiMailSend />
                    {data.contact.email}
                </span>
                <span>
                    <BiPhone />
                    {data.contact.phone}
                </span>
                <span>
                    <BiCurrentLocation />
                    {data.contact.address}
                </span>
            </div>
        </section>
    );
}

export default Contact;
