import React from "react";
import Header from "./Header";
import SocialIcons from "./SocialIcons";
import { usePageContext } from "../store/PageTypeContext";

function Layout({ children }) {
    const pageCtx = usePageContext();

    return (
        <React.Fragment>
            <Header />
            <main className={pageCtx.allowScroll ? "scroll-allowed" : null}>
                {children}
            </main>
            <SocialIcons />
        </React.Fragment>
    );
}

export default Layout;
