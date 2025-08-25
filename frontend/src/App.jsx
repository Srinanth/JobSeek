import React from 'react'
import { Route, Routes } from "react-router";
import { SignUpForm } from './pages/SignUp';
import { LoginForm } from './pages/Login';
import Navbar from './components/Navbar';
import Home from './pages/HomePage';

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

export default App;

/* import 'flowbite';
import { Suspense, lazy } from "react";
import { useLocation } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";
import { Toaster } from 'react-hot-toast';
import { ModalProvider } from './context/ModalContext';

const AppRoute = lazy(() => import("./routes/AppRoute"));
const AdminRoute = lazy(() => import("./routes/AdminRoute"));

function App() {
  const location = useLocation()
  const isAdminPath = location.pathname.startsWith('/admin');
  return (
    <>
      <Suspense fallback={<LoadingScreen />}>
        <Toaster position='top-center' />
        {isAdminPath ? <AdminRoute /> : (
          <ModalProvider>
            <AppRoute />
          </ModalProvider>
        )}
      </Suspense>
    </>
  )
}

export default App */