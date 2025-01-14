import Banner from "../Banner";

const LoserBanner = ({ answer }) => {
  return (
    <Banner status="sad">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  );
};

export default LoserBanner;
