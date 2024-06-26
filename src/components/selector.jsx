import React from "react";

export default function Selector({
  response,
  selectedResponse,
  handleRadioChange,
}) {
  const hasValues = Object.keys(response).filter(key => key !== 'selectedResponse').every((key) => {
    const value = response[key];
    return value !== "" && !isNaN(value) && Number.isInteger(parseFloat(value));
  });



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
            value="response1"
            checked={response.selectedResponse === "response1"}
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
            value="response2"
            checked={response.selectedResponse === "response2"}
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
            value="response3"
            checked={response.selectedResponse === "response3"}
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
            value="response4"
            checked={response.selectedResponse === "response4"}
            onChange={handleRadioChange}
            disabled={!hasValues}
            className={!hasValues ? "disabled-radio" : ""}
          />
        </div>
      </form>
    </div>
  );
}
