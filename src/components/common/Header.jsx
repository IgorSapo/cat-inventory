import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <nav>
    <NavLink to='/' activeClassName='active'>Home</NavLink>
    {' | '}
    <NavLink to='/cats' activeClassName='active'>Cats</NavLink>
  </nav>
)


export default Header;
