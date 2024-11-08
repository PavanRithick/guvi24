// src/components/NavBar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" exact activeClassName="active-link">All</NavLink>
      <NavLink to="/fullstack" activeClassName="active-link">Full Stack Development</NavLink>
      <NavLink to="/datascience" activeClassName="active-link">Data Science</NavLink>
      <NavLink to="/cybersecurity" activeClassName="active-link">Cyber Security</NavLink>
      <NavLink to="/career" activeClassName="active-link">Career</NavLink>
    </nav>
  );
};

export default NavBar;
