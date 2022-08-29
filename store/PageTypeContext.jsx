import React, { useContext, useState } from 'react'

export const pages = {
    homePage: "home",
    projectsPage: "projects",
    servicesPage: "services",
    contactPage: "contact"
}

const PageTypeContext = React.createContext({
    currentPage: "home",
    setCurrentPage: (newPage) => {}
})

export const usePageContext = () => {
    return useContext(PageTypeContext)
}

const PageTypeContextProvider = ({children}) => {

    const [page, setPage] = useState()


    const setCurrentPage = (newPage) => {
        if (page == "home") {
            setPage(newPage)
            return;
        }

        setPage(newPage);

    }

    return (
        <PageTypeContext.Provider value={{
            currentPage: page,
            setCurrentPage
        }}>
            {children}
        </PageTypeContext.Provider>
    )
}

export default PageTypeContextProvider;