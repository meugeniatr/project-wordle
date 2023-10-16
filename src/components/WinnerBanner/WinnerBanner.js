import Banner from "../Banner";

const WinnerBanner = ({ times }) => {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>
          {" "}
          {times} {times === 1 ? "guess" : "guesses"}
        </strong>
        .
      </p>
    </Banner>
  );
};

export default WinnerBanner;
