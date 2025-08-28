import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
<<<<<<< HEAD
import { Outlet,useLocation } from 'react-router';
import Footer from '../components/Footer';
=======
import { Outlet } from 'react-router';
>>>>>>> db22b41bb073a7196c213ccf02b01cd343fe703b

const SiteLayout = () => {
    const location = useLocation();
    const hideNavbarRoutes = ["/dashboard", "/profile"];
    return (
        
        <>
            {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default SiteLayout;
