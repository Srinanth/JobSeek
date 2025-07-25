import React from 'react'
import { Route, Routes } from "react-router";
import { SignUpForm } from './pages/signup';
import Navbar from './components/navbar';
import Home from './pages/homepage';


const App = () => {
  return(
    <div>
      <Navbar/>
      <Routes>
        <Route path="/signup" element={<SignUpForm />}/>
        <Route path="/" element={<Home />}/>
      </Routes>
    </div>
  )
}

export default App