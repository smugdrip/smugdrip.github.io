import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from '../Navbar/Navbar.tsx'
import PropTypes from 'prop-types';
import { faBootstrap, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';

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
        <p className="text-center text-center m-2">
          Built using
          React <FontAwesomeIcon icon={faReact} title="React" /> ,
          JavaScript <FontAwesomeIcon icon={faJsSquare} title="TypeScript" /> , and
          Bootstrap <FontAwesomeIcon icon={faBootstrap} title="Bootstrap" />
        </p>
      </footer>
    </div>
  );
};
Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;