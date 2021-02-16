import React, { useState, useEffect } from 'react';
import axios from 'axios'

import Splash from "./components/splash/splash.component";
import Scoreboard from "./components/scoreboard/scoreboard.component";
import Question from "./components/question/question.component";
import Choices from "./components/choices/choices.component"

import './App.css';

function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function App() {

  const [question, setQuestion] = useState()
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [answers, setAnswers] = useState([])

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

  const handleClick = (e) => {
    debugger
    console.log(e)
    setSelectedAnswer(e.target.value);
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
  };

  if (question === undefined) return null;
  
  return (
    <div className="main-container">
      <h1>Name That Pokemon</h1>
      <Scoreboard score="1" total="3" />
      <h2>TIMER</h2>
      <Question 
        question={question}
      />
      <Choices
        question={question}
        selectedAnswer = {selectedAnswer}
        handleClick={handleClick}
      />
    </div>
  );
};

export default App;
