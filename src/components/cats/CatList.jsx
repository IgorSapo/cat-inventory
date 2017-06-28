import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';

const CatList = ({ cats }) => (
  <ul className='list-group'>
    {cats.map(cat => 
      <li className='list-group-item' key={cat.id}><NavLink to={`/cats/${cat.id}`}>{cat.name}</NavLink></li>)}
  </ul>
)

CatList.propTypes = {
  cats: PropTypes.array.isRequired
};

export default withRouter(CatList);
