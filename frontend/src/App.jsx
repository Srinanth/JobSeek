import React from 'react'
import { Route, Routes } from "react-router";
import { SignUpForm } from './pages/signup';


const App = () => {
  return(
    <div>
      <Routes>
        <Route path="/signup" element={<SignUpForm />}/>
      </Routes>
    </div>
  )
}

export default App