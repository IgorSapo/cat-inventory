import React from 'react';
import PropTypes from 'prop-types';

const CheckBox = ({ item, handleChange }) => (
  <div className='field'>
    <div>
      <label>{item.name}</label>
      <input 
        type='checkbox'
        name={item.name}
        value={item.id}
        checked={item.checked}
        onChange={handleChange}/>
    </div>
  </div>
)

CheckBox.propTypes = {
  item: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default CheckBox;
