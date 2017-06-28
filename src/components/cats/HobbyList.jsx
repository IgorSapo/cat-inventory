import React from 'react';
import PropTypes from 'prop-types';

const HobbyList = ({ hobbies }) => (
  <ul>
    {hobbies.map(hobby =>
      <li key={hobby.id}>{hobby.name}</li>
    )}
  </ul>
)

HobbyList.propTypes = {
  hobbies: PropTypes.array.isRequired
};

export default HobbyList;
