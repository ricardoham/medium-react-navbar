import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <NavLink className="navbar__link" exact to="/">Home</NavLink>
    <NavLink className="navbar__link" to="/products">Products</NavLink>
    <NavLink className="navbar__link" to="/contacts">Contacts</NavLink>
  </nav>
);

export default Navbar;
