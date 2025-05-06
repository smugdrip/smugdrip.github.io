import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css'
import logoImg from '../../assets/logo.png';
// Removed the Row import as it's no longer used here
// import { Row } from 'react-bootstrap';

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
    </nav>
  );
};

export default Navbar;