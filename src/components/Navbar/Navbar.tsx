import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logoImg from '../../assets/logo.png';
import './index.css';

const Navbar: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  // This function is perfect for dynamically setting the active class.
  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `nav-link px-2 ${isActive ? 'text-info fw-semibold' : 'text-light'}`;

  return (
    <BootstrapNavbar
      bg="dark"
      variant="dark"
      expand="lg"
      className="mb-4 ps-3"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
    >
      <BootstrapNavbar.Brand as={NavLink} to="/" onClick={() => setExpanded(false)}>
        <img src={logoImg} width="35" height="35" alt="My Portfolio" />
      </BootstrapNavbar.Brand>

      <BootstrapNavbar.Toggle
        aria-controls="responsive-navbar-nav"
        className="me-3"
      />

      <BootstrapNavbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto flex-column flex-lg-row align-items-center align-items-lg-center w-100 gap-2 gap-lg-0">
          {[
            { to: '/', label: 'Home' },
            { to: '/about', label: 'About' },
            { to: '/skills', label: 'Skills' },
            { to: '/projects', label: 'Projects' },
          ].map(({ to, label }) => (
            <NavLink
              key={label}
              to={to}
              className={getNavLinkClass}
              onClick={() => setExpanded(false)}
            >
              {label}
            </NavLink>
          ))}

          {/* Social icons, still Nav.Link as they are external */}
          <Nav.Link
            href="https://www.linkedin.com/in/john-butterfield-37a8441b5/"
            target="_blank"
            rel="noreferrer"
            className="text-light p-3"
            onClick={() => setExpanded(false)}
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </Nav.Link>
          <Nav.Link
            href="https://github.com/smugdrip"
            target="_blank"
            rel="noreferrer"
            className="text-light"
            onClick={() => setExpanded(false)}
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </Nav.Link>
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};

export default Navbar;
