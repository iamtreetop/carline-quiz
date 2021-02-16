import React, { useState, useEffect } from 'react';
import axios from 'axios'

import Splash from "./components/splash/splash.component";
import Scoreboard from "./components/scoreboard/scoreboard.component";
import Timer from "./components/timer/timer.component";
import Question from "./components/question/question.component";
import Choices from "./components/choices/choices.component";
import ResultsPage from "./components/results-page/results-page.component";

import './App.css';

function App() {
  const [question, setQuestion] = useState();
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [answers, setAnswers] = useState([]);
  const [showScore, setShowScore] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [currentScore, setCurrentScore] = useState(0);
  const [isClicked, setIsClicked] = useState(false)

  const requestPokemon = async() => {
    let num = getRandomNum(1, 894);
    const pokemon = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/?limit=4&offset=${num}`
    );
    setQuestion(pokemon.data.results);
  }

  useEffect(() => {
      requestPokemon();
  },[]);


  function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  const handleClick = (e) => {
    setSelectedAnswer(e.target.value);
    keepScore(question, e.target.value);
    setIsClicked(true);
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

  const restartQuiz = () => {
    setAnswers([]);
    setSelectedAnswer('');
    setShowScore(false);
    setCurrentScore(0);
    setShowSplash(false);
    setIsClicked(false);
  }

  if (question === undefined) return null;
  
  if (showSplash) {
    return <Splash restartQuiz={restartQuiz}/>;
  }
    
  if (showScore) {
    return (
      <ResultsPage
        currentScore={currentScore}
        answers={answers}
        restartQuiz={restartQuiz}
      />
    );
  }
      
  return (
    <div className="main-container">
      <Scoreboard score={currentScore} total={answers.length} />
      <Timer 
        nextQuestion={nextQuestion} 
        clicked={isClicked} 
        setClicked={setIsClicked}
      />
      <Question 
        question={question}
      />
      <Choices
        question={question}
        selectedAnswer={selectedAnswer}
        handleClick={handleClick}
      />
    </div>
  )
};

export default App;