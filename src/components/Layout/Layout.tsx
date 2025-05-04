import Navbar from '../Navbar/Navbar.tsx'
import PropTypes from 'prop-types';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <header className="d-flex justify-content-center">
                <Navbar />
            </header>
            <main className="flex-grow-1">
                {children}
            </main>
            <footer className="text-center mt-auto">
                <p className='mt-3'>&copy; 2025 John Butterfield. All rights reserved.</p>
            </footer>
        </div>
    );
};
Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;