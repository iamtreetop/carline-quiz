import React from 'react';

import CustomButton from "../custom-button/custom-button.component";

import './results-page.styles.scss';

const ResultsPage = ({ currentScore, answers, restartQuiz}) => {
  return (
    <div className="results-container">
      <h1> Your Score is: </h1>
      <span> {currentScore} / {answers.length} </span>
      <CustomButton onClick={restartQuiz}>
        Play Again
      </CustomButton>
    </div>
  )
};

export default ResultsPage;