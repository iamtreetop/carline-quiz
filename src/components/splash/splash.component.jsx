import React from "react"

import CustomButton from "../custom-button/custom-button.component";

import './splash.styles.scss';

const Splash = ({ restartQuiz }) => {
 return (
   <div className="splash-container">
     <h1>NAME THAT POKEMON!</h1>
     <CustomButton onClick={restartQuiz}>Start Game</CustomButton>
   </div>
 ) 
};

export default Splash;