import React, { useState, useEffect } from 'react';

import "./timer.styles.scss";

const Timer = ({ nextQuestion }) => {
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      nextQuestion();
      setSeconds(5)
    }
  }, [seconds]);

  return (
    <div className="timer-container">
      <span>Time Left : {seconds}</span>
    </div>
  );
}

export default Timer;