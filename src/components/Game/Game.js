import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import WordInput from "../WordInput";
import LastGuesses from "../LastGuesses";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import WinnerBanner from "../WinnerBanner";
import LoserBanner from "../LoserBanner";

const answer = sample(WORDS);

function Game() {
  const [lastGuesses, setLastGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState("ongoing");

  const handleSubmit = (guessTry) => {
    const guessesAmount = [...lastGuesses, guessTry];
    setLastGuesses(guessesAmount);

    if (guessTry === answer) {
      setGameStatus("won");
    }

    if (guessesAmount.length === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  };

  const showBanner = gameStatus !== "ongoing";
  return (
    <>
      <LastGuesses
        guessList={lastGuesses}
        setLastGuesses={setLastGuesses}
        answer={answer}
      />
      <WordInput handleSubmitGuess={handleSubmit} disabled={showBanner} />
      {gameStatus === "won" && <WinnerBanner times={lastGuesses.length} />}
      {gameStatus === "lost" && <LoserBanner answer={answer} />}
    </>
  );
}

export default Game;
