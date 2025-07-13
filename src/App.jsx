import React,{useState} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Header1 from './components/Header1'
import Header2 from './components/Header2'
import Footer from './components/Footer'
import Login from './components/Login'
import Homepage from './components/Homepage'

function App() {



  return (
    <>
    <Router>
    <Header1/>
    <Header2/>
    <Routes>

      <Route path='/Read-that-book' element={<Homepage/>}/>

      <Route path='/login' element={<Login/>}/>
     
    </Routes>
    <Footer/>
    </Router>
    </>
  )
}

export default App
