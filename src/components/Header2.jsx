import React,{useState, useEffect} from 'react'
import '../css/Header.css'

const Header2 = () => {

  const[scrolled, setScrolled]=useState(false);

  useEffect(()=>{
    const handleScroll=()=>{
      setScrolled(window.scrollY>80);
    };

    window.addEventListener('scroll',handleScroll);

    return ()=>window.removeEventListener('scroll',handleScroll);
  })
  return (
    <div className='header'>
      <div className={`header-2 ${scrolled ? 'active':''}`}>
        <nav className='navbar'>
          <a href="#home">home</a>
          <a href="#featured">featured</a>
          <a href="#arrivals">arrivals</a>
          <a href="#review">review</a>
          <a href="#contact">contact</a>

        </nav>

      </div>
    </div>
  )
}

export default Header2