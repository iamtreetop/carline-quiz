import React from 'react';

import Choice from "../choice/choice.component";

import './choices.styles.scss';

const  Choices = ({ question }) => {
  debugger

  // randomization here
  return (
    <div className="choices-container">
      <Choice
        // value={question[0]}
        choice={"choice 1"}
        // handleClick={handleClick} 
        // selected={currentAnswer === question.choice_a} 
      />
      <Choice
        // value={question[0]}
        choice={"choice 2"}
        // handleClick={handleClick} 
        // selected={currentAnswer === question.choice_a} 
      />
      <Choice
        // value={question[0]}
        choice={"choice 3"}
        // handleClick={handleClick} 
        // selected={currentAnswer === question.choice_a} 
      />
      <Choice
        // value={question[0]}
        choice={"choice 4"}
        // handleClick={handleClick} 
        // selected={currentAnswer === question.choice_a} 
      />
    </div>
  )
};

export default Choices;