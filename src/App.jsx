import { useEffect, useState, useCallback } from 'react';
import './App.css';
import Letters from './components/letters/Letters';
import PokemonList from './components/words/PokemonList';
import pokemonImage from '../public/img/pokemon.png';
import pikaImage from '../public/img/pika.png';

function App() {
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [selectedPokemonName, setSelectedPokemonName] = useState(null);
  const [letterCorrect, setLetterCorrect] = useState([]);
  const [letterIncorrect, setLetterIncorrect] = useState([]);
  const [life, setLife] = useState(7);
  const [showWinModal, setShowWinModal] = useState(false);

  const onPokemonSelected = useCallback((pokemonName) => {
    setSelectedPokemonName(pokemonName);
  }, []);

  const handleLetterSelected = useCallback((letter) => {
    setSelectedLetter(letter);
  }, []);

  const checkWin = useCallback(() => {
    if (selectedPokemonName && selectedPokemonName.split('').every((letter) => letterCorrect.includes(letter))) {
      alert("Victoire ! Vous avez trouvé le Pokémon !");
      setShowWinModal(true);
      window.location.reload();
    }
  }, [selectedPokemonName, letterCorrect]);

  const checkLose = useCallback(() => {
    if (life <= 0) {
      alert(`Vous avez perdu ! Le pokemon était ${selectedPokemonName}.`);
      window.location.reload();
    }
  }, [life, selectedPokemonName]);

  useEffect(() => {
    if (selectedLetter && selectedPokemonName) {
      if (selectedPokemonName.includes(selectedLetter)) {
        if (!letterCorrect.includes(selectedLetter)) {
          setLetterCorrect((prevLetterCorrect) => [...prevLetterCorrect, selectedLetter]);
        }
      } else {
        if (!letterIncorrect.includes(selectedLetter)) {
          setLetterIncorrect((prevLetterIncorrect) => [...prevLetterIncorrect, selectedLetter]);
          setLife((prevLife) => prevLife - 1);
        }
      }
    }
  }, [selectedLetter, selectedPokemonName, letterCorrect, letterIncorrect]);

  useEffect(() => {
    checkWin();
    checkLose();
  }, [letterCorrect, letterIncorrect, checkWin, checkLose]);

  function checkedWord(selectedPokemonName, letterCorrect) {
    const pokemonNameArray = selectedPokemonName.split('');
    const pokemonNameArrayWithUnderscore = pokemonNameArray.map((letter) => letterCorrect.includes(letter) ? letter : '_ ');
    return pokemonNameArrayWithUnderscore.join('');
  }

  return (
    <div className="App">
      <div className="header">
        <div className="title">
          <h1>Jeu du Pendu</h1>
          {/* Utilisez l'image importée ici */}
          <img src={pokemonImage} alt="" />
        </div>
      </div>
      <div className="container">
        <div className="haut">
          <div className="img">
            {[...Array(7)].map((_, i) => (
              // Utilisez l'image importée ici
              <img key={i} src={pikaImage} alt="" className='image' style={{ opacity: i < life ? 1 : 0.1 }} />
            ))}
          </div>
          <PokemonList onPokemonSelected={onPokemonSelected} />
          <div className="motcache">
            {selectedPokemonName && <p>{checkedWord(selectedPokemonName, letterCorrect)}</p>}
          </div>
        </div>
        <div className="lettre">
          <Letters onLetterSelected={handleLetterSelected} />
        </div>
      </div>
      {showWinModal && <div>Victoire !</div>}
    </div>
  );
}

export default App;