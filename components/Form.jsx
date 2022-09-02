import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Form() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_p2ba4nw",
                "template_8k8l75q",
                form.current,
                "MFDmcN7F-RLqTHvul"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <form ref={form} onSubmit={sendEmail} className="form">
            <label>Navn</label>
            <input type="text" name="name" />
            <label>Email</label>
            <input type="email" name="email" />
            <label>Melding</label>
            <input type="textarea" name="message" />
            <button type="submit" className="page-button">
                Send
            </button>
        </form>
    );
}

export default Form;
