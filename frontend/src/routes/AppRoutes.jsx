import { Routes, Route } from "react-router-dom";
import SiteLayout from "./layouts/SiteLayout";
import Home from "./pages/Home";
import SignUpForm from "./pages/SignUpForm";
import LoginForm from "./pages/LoginForm";
import Admin from "./pages/Admin";

const AppRoute = () => {
    return (
        <Routes>
            {/* Public/auth routes */}
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/login" element={<LoginForm />} />

            {/* Routes with layout */}
            <Route path="/" element={<SiteLayout />}>
                <Route index element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="admin" element={<Admin />} />
            </Route>
        </Routes>
    );
};

export default AppRoute;
