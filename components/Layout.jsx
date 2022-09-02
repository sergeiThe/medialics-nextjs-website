import React from "react";
import Header from "./Header";
import SocialIcons from "./SocialIcons";
import { usePageContext } from "../store/PageTypeContext";
import Rocket from "./Rocket";

function Layout({ children }) {
    const pageCtx = usePageContext();

    return (
        <React.Fragment>
            <Header />
            <main className={pageCtx.allowScroll ? "scroll-allowed" : null}>
                {children}
            </main>
            <Rocket />
            <SocialIcons />
        </React.Fragment>
    );
}

export default Layout;
