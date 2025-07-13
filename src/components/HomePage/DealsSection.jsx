import React from 'react'
import '../../css/DealsSection.css'

const DealsSection = () => {
  return (
    <section className='deal'>
        <div className="content">
            <h3>deal of the day</h3>
            <h1>upto 50% off</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quo, dolores velit, accusamus maiores eius inventore quibusdam recusandae placeat laborum impedit dolore id ducimus odio dolor qui esse totam a!</p>
            <a href="#" className='btn'>shop now</a>
        </div>
        <div className="image">
            <img src='/shh-dont-tell-our-secret-anybody.png' alt=''/>
        </div>
    </section>
  )
}

export default DealsSection