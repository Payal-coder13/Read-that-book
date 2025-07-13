import React from 'react'
import '../../css/FooterSection.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowRight, faEnvelope, faMapMarkedAlt, faPhone} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';

const FooterSection = () => {
  return (
    <section className="footer">

        <div className="box-container">

            <div className="box">

                <h3>our locations</h3>
                <a href="#"><FontAwesomeIcon icon= {faMapMarkedAlt}/>india</a>
                <a href="#"><FontAwesomeIcon icon= {faMapMarkedAlt}/>USA</a>
                <a href="#"><FontAwesomeIcon icon= {faMapMarkedAlt}/>russia</a>
                <a href="#"><FontAwesomeIcon icon= {faMapMarkedAlt}/>france</a>
                <a href="#"><FontAwesomeIcon icon= {faMapMarkedAlt}/>japan</a>
                <a href="#"><FontAwesomeIcon icon= {faMapMarkedAlt}/>africa</a>
           
            </div>

             <div className="box">

                <h3>quick links</h3>
                <a href="#"><FontAwesomeIcon icon= {faArrowRight}/>home</a>
                <a href="#"><FontAwesomeIcon icon= {faArrowRight}/>featured</a>
                <a href="#"><FontAwesomeIcon icon= {faArrowRight}/>arrivals</a>
                <a href="#"><FontAwesomeIcon icon= {faArrowRight}/>reviews</a>
                <a href="#"><FontAwesomeIcon icon= {faArrowRight}/>blogs</a>
            </div>

             <div className="box">

                <h3>extra links</h3>
                <a href="#"><FontAwesomeIcon icon= {faArrowRight}/>account info</a>
                <a href="#"><FontAwesomeIcon icon= {faArrowRight}/>ordered items</a>
                <a href="#"><FontAwesomeIcon icon= {faArrowRight}/>privacy policy</a>
                <a href="#"><FontAwesomeIcon icon= {faArrowRight}/>payment methods</a>
                <a href="#"><FontAwesomeIcon icon= {faArrowRight}/>our services</a>
            </div>

             <div className="box">

                <h3>contact info</h3>
                <a href="#"><FontAwesomeIcon icon= {faPhone}/>+123-456-7890</a>
                <a href="#"><FontAwesomeIcon icon= {faPhone}/>+111-222-3333</a>
                <a href="#"><FontAwesomeIcon icon= {faEnvelope}/>readthatbook@gmail.com</a>
                <img src="/map.jpg" alt="" className='map' />        
            </div>

        </div>

        <div className='share'>
            <a href="#"><FontAwesomeIcon icon= {faFacebook}/></a>
            <a href="#"><FontAwesomeIcon icon= {faTwitter}/></a>
            <a href="#"><FontAwesomeIcon icon= {faInstagram}/></a>
            <a href="#"><FontAwesomeIcon icon= {faLinkedin}/></a>
            <a href="#"><FontAwesomeIcon icon= {faPinterest}/></a>
        </div>

        <div className="credit">created by <span>Miss Payal</span> | all rights reserved!</div>

        
    </section>
  )
}

export default FooterSection