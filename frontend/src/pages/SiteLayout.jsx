import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'

const SiteLayout = () => {
    return (
        <div>
            <Navbar />
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}
export default SiteLayout