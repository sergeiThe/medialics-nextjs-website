import React from "react";
import { usePageContext, pages } from "../store/PageTypeContext";

function Header() {
    const pageCtx = usePageContext();

    const navigateToHomePage = () => {
        pageCtx.setCurrentPage(pages.homePage);
    };
    const navigateToProjectsPage = () => {
        pageCtx.setCurrentPage(pages.projectsPage);
    };
    const navigateToServicesPage = () => {
        pageCtx.setCurrentPage(pages.servicesPage);
    };
    const navigateToContactPage = () => {
        pageCtx.setCurrentPage(pages.contactPage);
    };

    return (
        <header className="header">
            <span className="header__logo" onClick={navigateToHomePage}>
                Medialics
            </span>
            <nav className="header__nav">
                <ul className="header__ul">
                    <li className="header__li">
                        <button
                            className="header__nav-link nav-link"
                            onClick={navigateToProjectsPage}
                        >
                            Prosjekter
                        </button>
                    </li>
                    <li className="header__li">
                        <button
                            className="header__nav-link nav-link"
                            onClick={navigateToServicesPage}
                        >
                            Tjenester
                        </button>
                    </li>
                    <li className="header__li">
                        <button
                            className="header__nav-link nav-link"
                            onClick={navigateToContactPage}
                        >
                            Kontakt
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
