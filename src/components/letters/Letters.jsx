import { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import "./letters.css";

function Letters(props) {
  const [usedLetters, setUsedLetters] = useState([]);
  const letters = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');

  const handleButtonClick = useCallback((letter) => {
    if (!usedLetters.includes(letter)) {
      props.onLetterSelected(letter);
      setUsedLetters((currentUsedLetters) => [...currentUsedLetters, letter]);
    }
  }, [usedLetters, props]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const letter = event.key.toUpperCase();
      if (letters.includes(letter) && !usedLetters.includes(letter)) {
        handleButtonClick(letter);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [usedLetters, handleButtonClick, letters]);

  return (
    <div className="letters">
      {letters.map((letter, index) => (
        <button
          key={index}
          className={`letters-key ${usedLetters.includes(letter) ? 'used-letter' : ''}`}
          onClick={() => handleButtonClick(letter)}
          disabled={usedLetters.includes(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
}
Letters.propTypes = {
  onLetterSelected: PropTypes.func.isRequired,
};
export default Letters;

