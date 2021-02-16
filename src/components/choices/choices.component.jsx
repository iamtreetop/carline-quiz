import React from 'react';

import Choice from "../choice/choice.component";

import './choices.styles.scss';

const  Choices = ({ question, handleClick, selectedAnswer }) => {

  const shuffledChoices = [
    question[0],
    question[1],
    question[2],
    question[3],
  ].sort(() => Math.random() - 0.5);

  return (
    <div className="choices-container">
      {shuffledChoices.map(choice => (
        <Choice
          choice={(choice.name).toUpperCase()}
          handleClick={handleClick} 
          selected={selectedAnswer === (choice.name).toUpperCase()} 
        />
      ))}
    </div>
  )
};

export default Choices;