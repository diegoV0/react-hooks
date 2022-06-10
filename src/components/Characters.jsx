import React, {
  useState,
  useEffect,
  useReducer,
  useMemo,
  useRef,
  useCallback,
} from "react";
import Search from "./Search";
import useCharacters from "../hooks/useCharacters";
import "../styles/Characters.css";

const initialState = {
  favorites: [],
};

const API = "https://rickandmortyapi.com/api/character/";

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
  ///const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const searchInput = useRef(null);
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);

  const characters = useCharacters(API);

  const handleClick = (favorite) => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });
  };

  // const handleSearch = () => {
  //   setSearch(searchInput.current.value);
  // };
  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value);
  }, []);

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

  // useEffect(() => {
  //   fetch("https://rickandmortyapi.com/api/character/")
  //     .then((response) => response.json())
  //     .then((data) => setCharacters(data.results));
  // }, []);

  return (
    <div className="container">
      {favorites.favorites.map((favorite) => (
        <li key={favorite.id}>{favorite.name}</li>
      ))}

      <Search
        search={search}
        searchInput={searchInput}
        handleSearch={handleSearch}
      />

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
