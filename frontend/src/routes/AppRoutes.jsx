import { Routes, Route } from "react-router-dom";
import Home from "../pages/HomePage";
import SignUpForm from "../pages/SignUp";
import LoginForm from "../pages/Login";
import Admin from "../pages/Admin";
import SiteLayout from "../pages/SiteLayout";

const AppRoute = () => {
    return (
        <Routes>
            {/* Public/auth routes */}
            <Route path="/" element={<SignUpForm />} />
            <Route path="/login" element={<LoginForm />} />

            {/* Routes with layout */}
            <Route path="/" element={<SiteLayout />}>
                <Route path="home" element={<Home />} />
                <Route path="admin" element={<Admin />} />
            </Route>
        </Routes>
    );
};

export default AppRoute;
