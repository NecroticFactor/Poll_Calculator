export default function Result({ totalVotes, percentageRight, onReset }) {
  return (
    <div className="result-box">
      <h3>Results</h3>
      <div id="Display">
        <div>
          <label htmlFor="Total-Votes">Total Votes :</label>
          <output id="Total-Votes">{totalVotes}</output>
        </div>

        <div>
          <label htmlFor="right">Percentage Right Answer :</label>
          <output id="right">{percentageRight}%</output>
        </div>

        <div>
          <button id="reset" onClick={onReset}>
            RESET
          </button>
        </div>
      </div>
    </div>
  );
}
