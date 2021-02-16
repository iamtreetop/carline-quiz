import React from 'react';

import './scoreboard.styles.scss';

const Scoreboard = ({ total, score }) => {

  return (
    <div className="scoreboard-container">
      <span>
        Current Score : {score} / {total}
      </span>
    </div>
  )
};

export default Scoreboard;