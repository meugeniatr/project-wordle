import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import WordInput from "../WordInput";
import LastGuesses from "../LastGuesses";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [lastGuesses, setLastGuesses] = useState([]);

  const handleSubmit = (guessTest) => {
    setLastGuesses([...lastGuesses, guessTest]);
  };

  return (
    <>
      <LastGuesses guessList={lastGuesses} setLastGuesses={setLastGuesses} />
      <WordInput handleSubmitGuess={handleSubmit} />
    </>
  );
}

export default Game;
