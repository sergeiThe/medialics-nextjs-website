import React from 'react'


function Header() {
  return (
    <header className='header'>
      <span className='header__logo'>Medialics</span>
      <nav className='header__nav'>
        <ul className='header__ul'>
          <li className='header__li'><button className='header__nav-link nav-link'>Prosjekter</button></li>
          <li className='header__li'><button className='header__nav-link nav-link'>Tjenester</button></li>
          <li className='header__li'><button className='header__nav-link nav-link'>Kontakt</button></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header