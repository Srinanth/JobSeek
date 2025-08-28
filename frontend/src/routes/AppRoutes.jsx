import { Routes, Route } from "react-router";
import Home from "../pages/HomePage";
import SignUpForm from "../pages/SignUp";
import LoginForm from "../pages/Login";
import Admin from "../pages/Admin";
import SiteLayout from "../pages/SiteLayout";
import Dashboard from "../pages/dashboard";
import Search from "../pages/Search";
import Page404 from "../pages/Page404";

const AppRoute = () => {
    return (
        <Routes>
            {/* Public/auth routes */}
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/login" element={<LoginForm />} />

            {/* Routes with layout */}
            <Route path="/" element={<SiteLayout />}>
                <Route index element={<Home />} />
                <Route path="search" element={<Search />} />
                <Route path="admin" element={<Admin />} />
                <Route path="dashboard" element={<Dashboard />} />
            </Route>
            <Route path="*" element={<Page404 />}/>
        </Routes>
    );
};

export default AppRoute;
