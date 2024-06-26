import React from "react";

export default function Selector({
  response,
  selectedResponse,
  handleRadioChange,
}) {
  const hasValues = Object.values(response).some((value) => value !== "");

  return (
    <div id="radio-button">
      <h3 id="answer-heading">Choose the Right Answer</h3>
      <form className="select">
        <div>
          <label className="radio-container" htmlFor="rightA">
            A
          </label>
          <input
            type="radio"
            id="rightA"
            name="right-answer"
            value="A"
            checked={selectedResponse === "A"}
            onChange={handleRadioChange}
            disabled={!hasValues}
            className={!hasValues ? "disabled-radio" : ""}
          />
        </div>

        <div>
          <label className="radio-container" htmlFor="rightB">
            B
          </label>
          <input
            type="radio"
            id="rightB"
            name="right-answer"
            value="B"
            checked={selectedResponse === "B"}
            onChange={handleRadioChange}
            disabled={!hasValues}
            className={!hasValues ? "disabled-radio" : ""}
          />
        </div>

        <div>
          <label className="radio-container" htmlFor="rightC">
            C
          </label>
          <input
            type="radio"
            id="rightC"
            name="right-answer"
            value="C"
            checked={selectedResponse === "C"}
            onChange={handleRadioChange}
            disabled={!hasValues}
            className={!hasValues ? "disabled-radio" : ""}
          />
        </div>

        <div>
          <label className="radio-container" htmlFor="rightD">
            D
          </label>
          <input
            type="radio"
            id="rightD"
            name="right-answer"
            value="D"
            checked={selectedResponse === "D"}
            onChange={handleRadioChange}
            disabled={!hasValues}
            className={!hasValues ? "disabled-radio" : ""}
          />
        </div>
      </form>
    </div>
  );
}
