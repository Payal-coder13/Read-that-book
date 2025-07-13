import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/Header.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBook, faSearch, faHeart, faShoppingCart,faUser} from '@fortawesome/free-solid-svg-icons'



const Header1 = () => {

  const navigate=useNavigate();

  const [searchForm,setSearchForm]=useState(false);
  const searchBtn=document.getElementById('search-btn');

  
  const handleSearch=()=>{
    setSearchForm(!searchForm);
  }
    
  return (
    <div className='header'>
        <div className='header-1'>
            <a href='#' className='logo'><FontAwesomeIcon icon={faBook} className='bookIcon'/> Read-That-Book</a>
            <form action="" className={`search-form ${searchForm ? 'active': ''}`}>
                <input type="search" name="search" placeholder='search here...' id="search-box" />
                <label htmlFor='search-box' className='fa-search'><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></label>
            </form>
            <div className="icons">
                <div id="search-btn" className onClick={handleSearch} ><FontAwesomeIcon icon={faSearch}/></div>
                <a href='#' className='heart'><FontAwesomeIcon icon={faHeart}/></a>
                <a href='#' className='shoppingCart'><FontAwesomeIcon icon={faShoppingCart}/></a>
                <div id="login-btn" className="" onClick={()=>navigate('/login')}><FontAwesomeIcon icon={faUser}/></div>
            </div>

        </div>
    </div>
  )
}

export default Header1