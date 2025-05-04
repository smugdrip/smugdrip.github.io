import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './index.css'
import logoImg from '../../assets/logo.png';
import { Row } from 'react-bootstrap';

const Navbar: React.FC = () => {

    return (
        <nav className={"navbar navbar-expand navbar-dark bg-dark mx-3 my-3 px-3 py-2"}>
=
            <NavLink to="/" className="navbar-brand p-2">
                <img src={logoImg} width="35" height="35" alt="My Portfolio"/>
            </NavLink>
            <Row>
            <div className="d-flex p-2 flex-row">
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
                    About Me
                </NavLink>
                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                    `nav-link px-2 ${isActive ? 'text-info fw-semibold' : 'text-light'}`
                    }
                >
                    Contact
                </NavLink>
                <NavLink
                    to="/projects"
                    className={({ isActive }) =>
                    `nav-link px-2 ${isActive ? 'text-info fw-semibold' : 'text-light'}`
                    }
                >
                    Projects
                </NavLink>
            </div>
            </Row>
        </nav>
    );
};

export default Navbar;