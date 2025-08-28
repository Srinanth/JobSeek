import { Routes, Route } from "react-router-dom";
import Home from "../pages/HomePage";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import Admin from "../pages/Admin";
import SiteLayout from "../pages/SiteLayout";
import Dashboard from "../pages/dashboard";
import Search from "../pages/Search";
import ProfilePage from "../pages/Profile";
import Page404 from "../pages/Page404";
import SavedJobsPage from "../pages/Saved";

const AppRoute = () => {
  return (
    <Routes>
      {/* Public/auth routes */}
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />

      {/* Routes with layout */}
      <Route path="/" element={<SiteLayout />}>
        <Route index element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path="admin" element={<Admin />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="savedjobs" element={<SavedJobsPage />} />
      </Route>

      {/* Fallback for unmatched routes */}
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default AppRoute;
