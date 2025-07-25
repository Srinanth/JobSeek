import React from 'react'
import { Route, Routes } from "react-router";
import { SignUpForm } from './pages/signup';
import { LoginForm } from './pages/login';
import Navbar from './components/navbar';
import Home from './pages/homepage';

const App = () => {
  return(
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<SignUpForm />}/>
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="/home" element={<Home />}/>
      </Routes>
    </div>
  )
}

export default App