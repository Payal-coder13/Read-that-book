import React from 'react'
import '../css/Footer.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome, faTags, faList, faComment, faBlog} from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <div className='Footer'>
        <nav className='navbar'>
          <a href="#home"><FontAwesomeIcon icon={faHome}/></a>
          <a href="#featured"><FontAwesomeIcon icon={faList}/></a>
          <a href="#arrivals"><FontAwesomeIcon icon={faTags}/></a>
          <a href="#review"><FontAwesomeIcon icon={faComment}/></a>
          <a href="#contact"><FontAwesomeIcon icon={faBlog}/></a>

        </nav>
    </div>
  )
}

export default Footer