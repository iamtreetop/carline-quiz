import React from 'react';

import Choice from "../choice/choice.component";

import './choices.styles.scss';

const  Choices = ({ question }) => {
  // randomization here
  return (
    <div className="choices-container">
      <Choice
        // value={question[0]}
        choice={question[0].name}
        // handleClick={handleClick} 
        // selected={currentAnswer === question.choice_a} 
      />
      <Choice
        // value={question[0]}
        choice={question[1].name}
        // handleClick={handleClick} 
        // selected={currentAnswer === question.choice_a} 
      />
      <Choice
        // value={question[0]}
        choice={question[2].name}
        // handleClick={handleClick} 
        // selected={currentAnswer === question.choice_a} 
      />
      <Choice
        // value={question[0]}
        choice={question[3].name}
        // handleClick={handleClick} 
        // selected={currentAnswer === question.choice_a} 
      />
    </div>
  )
};

export default Choices;