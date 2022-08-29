import React from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import data from '../data/data';

function SocialIcons() {
  return (
    <footer className='footer'>
      <div className='footer__icons'>
        <a href={data.socialURLs.linkedin} target="_blank" rel='noreferrer'>
          <FaLinkedin className='footer__icon'/>
        </a>
        <a href={data.socialURLs.github} target="_blank" rel='noreferrer'>
          <FaGithub className='footer__icon'/>
        </a>
      </div>
    </footer>
  )
}

export default SocialIcons