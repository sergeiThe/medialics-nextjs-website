import React from "react";

function Form() {
    return (
        <form className="form">
            <label>Navn</label>
            <input type="text" />
            <label>Email</label>
            <input type="email" />
            <label>Melding</label>
            <input type="textarea" />
            <button type="submit" className="page-button">
                Send
            </button>
        </form>
    );
}

export default Form;
