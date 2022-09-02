import React from "react";
import data from "../data/data";
import { TbBrandNextjs } from "react-icons/tb";
import { FaReact, FaSass, FaWordpressSimple } from "react-icons/fa";
import { usePageContext, pages } from "../store/PageTypeContext";

export default function HomePage() {
    const pageCtx = usePageContext();

    const goToContactPage = () => {
        pageCtx.setCurrentPage(pages.contactPage);
    };

    return (
        <React.Fragment>
            <section className="home">
                <div className="home__title-container">
                    <h1 className="home__title">{data.home.title}</h1>
                </div>
                <div className="home__content-container">
                    <p className="home__text">{data.home.about}</p>
                    <button
                        className="home__button page-button"
                        onClick={goToContactPage}
                    >
                        Kontakt
                    </button>
                </div>
            </section>
            <div className="tech-stack">
                <TbBrandNextjs />
                <FaReact className="rotate" />
                <FaSass />
                <FaWordpressSimple />
            </div>
        </React.Fragment>
    );
}
