import React, { useState, useEffect } from 'react';

import "./timer.styles.scss";

const Timer = ({ nextQuestion, clicked, setClicked}) => {

  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    let interval = setTimeout(() => setSeconds(seconds - 1), 1000);
    if (clicked) {
      clearTimeout(interval);
      setSeconds(5);
      setClicked(false);
      return;
    } else if (seconds <= 0) {
      clearTimeout(interval)
      nextQuestion();
      setSeconds(5);
      setClicked(false);
      return;
    }
  }, [seconds]);
  
  return (
    <div className="timer-container">
      <span>Time Left : {seconds}</span>
    </div>
  );
}

export default Timer;