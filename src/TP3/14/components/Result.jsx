import PropTypes from "prop-types";

function Result({ score, total }) {
  return (
    <div className="result-container">
      <h2>Quiz Finished!</h2>
      <p>Your score is {score} out of {total}</p>
    </div>
  );
}

Result.propTypes = {
  score: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default Result;
