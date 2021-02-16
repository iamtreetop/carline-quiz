import React, { useState, useEffect } from 'react';
import axios from 'axios'

import Scoreboard from "../scoreboard/scoreboard.component";
import Timer from "../timer/timer.component";
import Question from "../question/question.component";
import Choices from "../choices/choices.component";



import "./quiz.styles.scss";

const Quiz = () => {
  const [question, setQuestion] = useState();
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [answers, setAnswers] = useState([]);
  const [showScore, setShowScore] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);

  const requestPokemon = async() => {
    let num = getRandomNum(1, 894);
    const pokemon = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/?limit=4&offset=${num}`
    );
    setQuestion(pokemon.data.results);
  }

  useEffect(() => {
      requestPokemon();
  }, []);

  function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  const handleClick = (e) => {
    setSelectedAnswer(e.target.value);
    keepScore(question, e.target.value);
    nextQuestion();
  };

  const nextQuestion = () => {
    const answer = {answer: selectedAnswer}

    answers.push(answer);
    setAnswers(answers);
    setSelectedAnswer('');

    if (answers.length < 10) {
      requestPokemon();
      return;
    }

    setShowScore(true);
  };

  const keepScore = (question, choice) => {
    let currentAnswer = (question[0].name).toUpperCase();
    if (currentAnswer === choice) {
      setCurrentScore(currentScore + 1)
    } else {
      setCurrentScore(currentScore)
    }
  };

  return (
    <div className="main-container">
      <Scoreboard score={currentScore} total={answers.length} />
      <Timer nextQuestion={nextQuestion} />
      <Question 
        question={question}
      />
      <Choices
        question={question}
        selectedAnswer = {selectedAnswer}
        handleClick={handleClick}
      />
    </div>
  )
};

export default Quiz;