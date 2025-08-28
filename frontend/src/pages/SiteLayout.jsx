import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';

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
