import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css'
import logoImg from '../../assets/logo.png';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar: React.FC = () => {

  return (
    <nav className={"navbar navbar-expand navbar-dark bg-dark mb-4 ps-3 "}>
      <NavLink to="/" className="navbar-brand">
        <img src={logoImg} width="35" height="35" alt="My Portfolio"/>
      </NavLink>
      <div className="d-flex p-2 flex-wrap">
        <NavLink
          to="/"
          className={({ isActive }) =>
          `nav-link px-2 ${isActive ? 'text-info fw-semibold' : 'text-light'}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
          `nav-link px-2 ${isActive ? 'text-info fw-semibold' : 'text-light'}`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
          `nav-link px-2 ${isActive ? 'text-info fw-semibold' : 'text-light'}`
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
          `nav-link px-2 ${isActive ? 'text-info fw-semibold' : 'text-light'}`
          }
        >
          Contact
        </NavLink>
        

      </div>
      <div className="ms-auto d-flex align-items-center pe-4 gap-4">
        <a
          href="https://www.linkedin.com/in/john-butterfield-37a8441b5/"
          target="_blank"
          rel="noreferrer"
          className="text-decoration-none"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" size="2x" />
        </a>
        <a
          href="https://github.com/smugdrip"
          target="_blank"
          rel="noreferrer"
          className="text-decoration-none"
        >
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" size="2x" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
