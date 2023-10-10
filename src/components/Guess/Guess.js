import { range } from "../../utils";

const Guess = ({ value }) => {
  return (
    <p className="guess">
      {range(5).map((number) => {
        return (
          <span className="cell" key={number}>
            {value ? value[number] : undefined}
          </span>
        );
      })}
    </p>
  );
};

export default Guess;
