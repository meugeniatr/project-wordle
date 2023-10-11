import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

const Cell = ({ letter, status }) => {
  return <span className={`cell ${status}`}>{letter}</span>;
};

const Guess = ({ value, answer }) => {
  const result = checkGuess({ guess: value, answer });
  return (
    <p className="guess">
      {range(5).map((number) => {
        const cellColor = result ? result[number].status : "";
        const letter = result ? result[number].letter : undefined;
        return <Cell key={number} letter={letter} status={cellColor} />;
      })}
    </p>
  );
};

export default Guess;
