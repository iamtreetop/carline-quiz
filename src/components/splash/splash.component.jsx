import React from "react"

import './splash.styles.scss';

const Splash = ({ restartQuiz }) => {
 return (
   <div className="splash-container">
     <h1>SPLASH PAGE</h1>
     <button onClick={restartQuiz}>Start Game</button>
   </div>
 ) 
};

export default Splash;