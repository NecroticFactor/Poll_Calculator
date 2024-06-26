import React from "react";

export default function Result({ totalVotes, percentageRight, onReset }) {
  return (
    <div className="result-box">
      <h3>Results</h3>
      <div id="Display">
        <div>
          <label htmlFor="Total-Votes">Total Votes :</label>
          <output id="Total-Votes">{isNaN(totalVotes) ? 0 : totalVotes}</output>
        </div>

        <div>
          <label htmlFor="right">Percentage Right Answer :</label>
          <output id="right">
            {isNaN(percentageRight) ? "0" : percentageRight}%
          </output>
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
