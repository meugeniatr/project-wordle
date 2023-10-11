import { range } from "../../utils";
import Guess from "../Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

const LastGuesses = ({ guessList, answer }) => {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((number) => (
        <Guess value={guessList[number]} key={number} answer={answer} />
      ))}
    </div>
  );
};

export default LastGuesses;
