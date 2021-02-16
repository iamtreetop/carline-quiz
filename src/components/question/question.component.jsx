import React, { useState, useEffect } from 'react';
import axios from "axios";

import './question.styles.scss';

const Question = ({ question }) => {

  const [pokeImage, setPokeImage] = useState()

  let questionUrl = question[0].url

  const getPokemonImage = async() => {
    const pokemon = await axios.get(questionUrl);
    setPokeImage(pokemon.data.sprites.front_default)
  }

  useEffect(() => {
    getPokemonImage();
  });

  return (
    <div className="scoreboard-container">
      <img src={pokeImage} alt="" />
    </div>
  )
};

export default Question;