import React from 'react'
import { Route, Routes } from "react-router";
import { SignUpForm } from './pages/signup';
import { LoginForm } from './pages/login';


const App = () => {
  return(
    <div>
      <Routes>
        <Route path="/" element={<SignUpForm />}/>
        <Route path="/login" element={<LoginForm/>}/>
      </Routes>
    </div>
  )
}

export default App