import React from "react";

export default function Input({ response, updateResponse }) {
  return (
    <div>
      <form className="poll-values">
        <h3 id="poll-heading">Enter the results of your Poll</h3>

        <div className="input">
          <label htmlFor="A">
            1<sup>st</sup> Poll Count
          </label>
          <input
          autoFocus = {true}
            type="text"
            onChange={(e) => updateResponse(e, "response1")}
            value={response.response1}
          />
        </div>

        <div className="input">
          <label htmlFor="B">
            2<sup>nd</sup> Poll Count
          </label>
          <input
            type="text"
            onChange={(e) => updateResponse(e, "response2")}
            value={response.response2}
          />
        </div>

        <div className="input">
          <label htmlFor="C">
            3<sup>rd</sup> Poll Count
          </label>
          <input
            type="text"
            onChange={(e) => updateResponse(e, "response3")}
            value={response.response3}
          />
        </div>

        <div className="input">
          <label htmlFor="D">
            4<sup>th</sup> Poll Count
          </label>
          <input
            type="text"
            onChange={(e) => updateResponse(e, "response4")}
            value={response.response4}
          />
        </div>
      </form>
    </div>
  );
}
