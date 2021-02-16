import React from 'react';

import CustomButton from "../custom-button/custom-button.component";

import './results-page.styles.scss';

const ResultsPage = ({ currentScore, answers, restartQuiz}) => {
  return (
    <div className="results-container">
      <h2> RESULTS </h2>
      <h2> {currentScore} / {answers.length} </h2>
      <CustomButton onClick={restartQuiz}>
        Play Again
      </CustomButton>
    </div>
  )
};

export default ResultsPage;