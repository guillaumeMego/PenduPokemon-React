import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "./pokemonList.css";

function PokemonList({ onPokemonSelected }) {
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const handleButtonClick = async () => {
    const response = await axios.get("https://pokebuildapi.fr/api/v1/pokemon/limit/151");
    if (response.status === 200) {
      const kantoPokemon = response.data.map((pokemon) => {
        return {
          name: pokemon.slug,
          imageUrl: pokemon.image,
        };
      });
      const randomIndex = Math.floor(Math.random() * kantoPokemon.length);
      setSelectedPokemon(kantoPokemon[randomIndex]);
      setIsButtonVisible(false);
    }
  };

  useEffect(() => {
    if (selectedPokemon) {
      const pokemonName = selectedPokemon.name.toUpperCase();
      onPokemonSelected(pokemonName);
    }
  }, [selectedPokemon, onPokemonSelected]);

  return (
    <div>
      {isButtonVisible && (
        <button className="button" onClick={handleButtonClick}>
          Commencer une partie
        </button>
      )}
      <div className="pokemon">
        {selectedPokemon && (
          <div className="infos">
            <img src={selectedPokemon.imageUrl} alt={selectedPokemon.name} />
          </div>
        )}
      </div>
    </div>
  );
}
PokemonList.propTypes = {
  onPokemonSelected: PropTypes.func.isRequired,
};

export default PokemonList;