import React from 'react'
import '../../css/NewsLetterSection.css'

const NewsLetterSection = () => {
  return (
    <section className='newsletter'>

        <form actions= "">
            <h3>Subscribe for latest updates</h3>
            <input type='email' name='' placeholder='enter your email' id='' className='box'/>
            <input type='submit' value="subsribe" className='btn'/>
        </form>
    </section>
  )
}

export default NewsLetterSection