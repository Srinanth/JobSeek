import { Routes, Route } from "react-router";
import Home from "../pages/HomePage";
import SignUp from "../pages/SignUp";
import LoginForm from "../pages/Login";
import Admin from "../pages/Admin";
import SiteLayout from "../pages/SiteLayout";
import Dashboard from "../pages/dashboard";
import Search from "../pages/Search";
import ProfilePage from "../pages/Profile";

const AppRoute = () => {
    return (
        <Routes>
            {/* Public/auth routes */}
            <Route path="/" element={<SignUp />} />
            <Route path="/login" element={<LoginForm />} />

            {/* Routes with layout */}
            <Route path="/" element={<SiteLayout />}>
                <Route path="home" element={<Home />} />
                <Route path="search" element={<Search />} />
                <Route path="admin" element={<Admin />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="profile" element={<ProfilePage />} />
            </Route>
        </Routes>
    );
};

export default AppRoute;
