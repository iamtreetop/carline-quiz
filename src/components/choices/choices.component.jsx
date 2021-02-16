import React from 'react';

import Choice from "../choice/choice.component";

import './choices.styles.scss';

const  Choices = ({ question, handleClick, selectedAnswer }) => {
  // randomization here
  debugger

  const shuffledChoices = [
    question[0],
    question[1],
    question[2],
    question[3],
  ].sort(() => Math.random() - 0.5);

  return (
    <div className="choices-container">
      <Choice
        choice={(shuffledChoices[0].name).toUpperCase()}
        handleClick={handleClick} 
        selected={selectedAnswer === (shuffledChoices[0].name).toUpperCase()} 
      />
      <Choice
        choice={(shuffledChoices[1].name).toUpperCase()}
        handleClick={handleClick} 
        selected={selectedAnswer === (shuffledChoices[1].name).toUpperCase()} 
      />
      <Choice
        choice={(shuffledChoices[2].name).toUpperCase()}
        handleClick={handleClick} 
        selected={selectedAnswer === (shuffledChoices[2].name).toUpperCase()} 
      />
      <Choice
        choice={(shuffledChoices[3].name).toUpperCase()}
        handleClick={handleClick} 
        selected={selectedAnswer === (shuffledChoices[3].name).toUpperCase()} 
      />
    </div>
  )
};

export default Choices;