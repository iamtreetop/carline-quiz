import React from 'react';

import './choice.styles.scss';

const Choice = ({ choice }) => {

  return (
    <button value={choice}>
      {choice}
    </button>
  )
};

export default Choice;