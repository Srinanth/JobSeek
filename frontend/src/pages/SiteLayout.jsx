import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const SiteLayout = () => {
    return (
        <>
            {location.pathname !== '/dashboard' && <Navbar />}
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default SiteLayout;
