import React, { useContext, useState } from "react";

export const pages = {
    homePage: "home",
    projectsPage: "projects",
    servicesPage: "services",
    contactPage: "contact",
};

const PageTypeContext = React.createContext({
    currentPage: "home",
    setCurrentPage: (newPage) => {},
    allowScroll: false,
});

export const usePageContext = () => {
    return useContext(PageTypeContext);
};

const PageTypeContextProvider = ({ children }) => {
    const [page, setPage] = useState();
    const [scrollAllowed, setScrollAllowed] = useState();

    const setCurrentPage = (newPage) => {
        if (newPage == pages.projectsPage) {
            setScrollAllowed(true);
            setPage(newPage);
            return;
        }

        setScrollAllowed(false);
        setPage(newPage);
    };

    return (
        <PageTypeContext.Provider
            value={{
                currentPage: page,
                setCurrentPage,
                allowScroll: scrollAllowed,
            }}
        >
            {children}
        </PageTypeContext.Provider>
    );
};

export default PageTypeContextProvider;
