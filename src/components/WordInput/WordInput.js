import { useState } from "react";

const WordInput = ({ handleSubmitGuess }) => {
  const [tentativeGuess, setTentativeGuess] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSubmitGuess(tentativeGuess);
    setTentativeGuess("");
  };

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit(event);
      }}
    >
      <label for="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        maxLength={5}
        minLength={5}
        type="text"
        value={tentativeGuess}
        onChange={(event) =>
          setTentativeGuess(event.target.value.toUpperCase())
        }
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
      />
    </form>
  );
};

export default WordInput;
