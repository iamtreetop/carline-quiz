import React from 'react';

import './choice.styles.scss';

const Choice = ({ choice }) => {

  return (
    <button className="choice" value={choice}>
      {choice}
    </button>
  )
};

export default Choice;