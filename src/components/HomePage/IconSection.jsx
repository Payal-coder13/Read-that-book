import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadset, faPlane, faRedoAlt, faLock } from '@fortawesome/free-solid-svg-icons'
import '../../css/IconSection.css'

const IconSection = () => {
  return (
    <section className='icons-container'>

        <div className='icons'>
            <FontAwesomeIcon icon={faPlane}/>
            <div className='content'>
                <h3>free shipping</h3>
                <p>order over $100</p>
            </div>
        </div>
      
        <div className='icons'>
            <FontAwesomeIcon icon={faLock}/>
            <div className='content'>
                <h3>secure payment</h3>
                <p>100% secure payment</p>
            </div>
        </div>

        <div className='icons'>
            <FontAwesomeIcon icon={faRedoAlt}/>
            <div className='content'>
                <h3>easy returns</h3>
                <p>10 days return</p>
            </div>
        </div>

        <div className='icons'>
            <FontAwesomeIcon icon={faHeadset}/>
            <div className='content'>
                <h3>24/7 support</h3>
                <p>call us anytime</p>
            </div>
        </div>
    </section>
  )
}

export default IconSection