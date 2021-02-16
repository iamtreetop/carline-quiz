import React from 'react';

import Choice from "../choice/choice.component";

import './choices.styles.scss';

const  Choices = ({ question, handleClick, selectedAnswer }) => {
  // randomization here
  debugger
  return (
    <div className="choices-container">
      <Choice
        choice={(question[0].name).toUpperCase()}
        handleClick={handleClick} 
        selected={selectedAnswer === (question[0].name).toUpperCase()} 
      />
      <Choice
        choice={(question[1].name).toUpperCase()}
        handleClick={handleClick} 
        selected={selectedAnswer === (question[1].name).toUpperCase()} 
      />
      <Choice
        choice={(question[2].name).toUpperCase()}
        handleClick={handleClick} 
        selected={selectedAnswer === (question[2].name).toUpperCase()} 
      />
      <Choice
        choice={(question[3].name).toUpperCase()}
        handleClick={handleClick} 
        selected={selectedAnswer === (question[3].name).toUpperCase()} 
      />
    </div>
  )
};

export default Choices;