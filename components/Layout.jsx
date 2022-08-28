import React from 'react'
import Header from './Header'
import SocialIcons from './SocialIcons'

function Layout({children}) {
  return (
    <React.Fragment>
      <Header/>
      <main>
      {children}
      </main>
      <SocialIcons/>

    </React.Fragment>
  )
}

export default Layout