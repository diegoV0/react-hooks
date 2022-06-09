import React, { useState, useEffect, useReducer, useMemo } from "react";
import "../styles/Characters.css";

const initialState = {
  favorites: [],
};

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);

  const handleClick = (favorite) => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  // const filterCharacters = characters.filter((character) => {
  //   return character.name.toLowerCase().includes(search.toLowerCase());
  // });

  const filterCharacters = useMemo(
    () =>
      characters.filter((character) => {
        return character.name.toLowerCase().includes(search.toLowerCase());
      }),
    [characters, search]
  );

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <div className="container">
      {favorites.favorites.map((favorite) => (
        <li key={favorite.id}>{favorite.name}</li>
      ))}

      <div className="search">
        <input type="text" value={search} onChange={handleSearch} />
      </div>

      {filterCharacters.map((character) => (
        <div className="card" key={character.id}>
          <figure className="image">
            <img src={character.image} alt="" />
          </figure>
          <h3>{character.name}</h3>
          <p>{character.status}</p>
          <p>{character.species}</p>
          <p>{character.gender}</p>
          <p>{character.location.name}</p>
          <button type="button" onClick={() => handleClick(character)}>
            Add Favorites
          </button>
        </div>
      ))}
      <h2>{}</h2>
    </div>
  );
};

export default Characters;
