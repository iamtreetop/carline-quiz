import React from 'react';

import './choice.styles.scss';

const Choice = ({ choice, handleClick }) => {
  return (
    <button 
      className="choice" 
      value={choice}
      onClick={handleClick}
    >
      {choice}
    </button>
  )
};

export default Choice;