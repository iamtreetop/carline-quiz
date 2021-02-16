import React, { useState, useEffect } from 'react';

import "./timer.styles.scss";

const Timer = ({ seconds }) => {
  // const [seconds, setSeconds] = useState(currentSeconds);
  // const [isActive, setIsActive] = useState(true)

  // // const checkTime = (seconds) => {
  // //   if (seconds === )
  // // }

  // useEffect(() => {
  //   // console.log(seconds)
  //   if (seconds > 0) {
  //     setTimeout(() => setSeconds(seconds - 1), 1000);
  //   } else {
  //     return nextQuestion();
  //     // setSeconds(5)
  //   }

  //   // const decrement = setInterval(timer, 1000);
  //   // function timer() {
  //   //   seconds--;
  //   //   setSeconds(seconds);
  //   //   if (seconds <= 0) {
  //   //     clearInterval(decrement)
  //   //   };
  //   // } 
  // }, [seconds, isActive]);

  // if (!isActive) return () => nextQuestion();
  
  return (
    // {
    //   if (seconds === 0) return nextQuestion();
    // }
    <div className="timer-container">
      <span>Time Left : {seconds}</span>
    </div>
  );
}

export default Timer;