import React, from 'react';

export default function Selector() {
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
          value={response[0]}
          checked={selectedResponse === response[0]}
          onChange={handleRadioChange}
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
          value={response[1]}
          checked={selectedResponse === response[1]}
          onChange={handleRadioChange}
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
          value={response[2]}
          checked={selectedResponse === response[2]}
          onChange={handleRadioChange}
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
          value={response[3]}
          checked={selectedResponse === response[3]}
          onChange={handleRadioChange}
          />
        </div>
      </form>
    </div>
  );
}
