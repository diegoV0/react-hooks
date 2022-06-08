import React, { useState, useEffect } from "react";
import "../styles/Characters.css";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <div class="container">
      {characters.map((character) => (
        <div className="card">
          <figure>
            <img src={character.image} alt="" />
          </figure>
          <h3>{character.name}</h3>
          <p>{character.status}</p>
          <p>{character.species}</p>
          <p>{character.gender}</p>
          <p>{character.location.name}</p>
        </div>
      ))}
      <h2>{}</h2>
    </div>
  );
};

export default Characters;
