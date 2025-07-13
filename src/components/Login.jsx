import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const Login = () => {
    
    const navigate=useNavigate();

  return (
    <div className='Login-form'>
        <FontAwesomeIcon icon={faTimes} className='close' onClick={()=>navigate('/')}/>
        <form action=" ">
            <h3>sign in</h3>
            <span>username</span>
            <input type='email' placeholder='enter your email' className='box'></input>
            <span>password</span>
            <input type='password' placeholder='enter your password' className='box'></input>
            <div className='checkbox'>
                <input type='checkbox' id='remember-me'></input>
                <label htmlFor='remember-me'>remember me</label>
            </div>
            <input type='submit' value='sign-in' className='btn'></input>
            <p>forget password ? <a href='#'>click here</a></p>
            <p>don't have an account ? <a href='#'>create one</a></p>
        </form>
    </div>
  )
}

export default Login