import React, { useState } from "react";
import "./App.css";
import Result from "./components/result";
import Selector from "./components/selector";
import Input from "./components/vote_input";

function App() {
  const initialResponsetate = {
    response1: "",
    response2: "",
    response3: "",
    response4: "",
    selectedResponse: "",
  };

  const [response, setResponse] = useState({ ...initialResponseState });

  const [results, setResults] = useState({
    totalVotes: 0,
    percentageRight: 0,
  });

  function updateResponse(event, responseKey) {
    setResponse({
      ...response,
      [responseKey]: event.target.value,
    });
  }

  function handleRadioChange(event) {
    const selectedValue = event.target.value;
    setResponse({
      ...response,
      selectedResponse: selectedValue,
    });

    const total = Object.values(response).reduce((acc, val) => {
      if (!isNaN(val)) {
        return acc + parseInt(val);
      }
      return acc;
    }, 0);

    // Calculate percentage of right answer
    const percentage =
      total === 0 ? 0 : (response[selectedValue] / total) * 100;

    setResults({
      totalVotes: total,
      percentageRight: percentage.toFixed(2), // Round to 2 decimal places
    });
  }

  function handleReset() {
    setResponse({ ...initialResponseState });
    setResults({
      totalVotes: 0,
      percentageRight: 0,
    });
  }

  return (
    <div className="App">
      <main className="App__main">
        <div className="App__main__left">
          <h1>
            THE POLL
            <br />
            COUNTER
          </h1>
          <h2>
            Calculate the results of your <br />
            social media polls.
          </h2>
        </div>

        <div className="App__main__right">
          <Input response={response} updateResponse={updateResponse} />
          <Selector response={response} updateResponse={updateResponse} />
          <Result
            totalVotes={results.totalVotes}
            percentageRight={results.percentageRight}
            onReset={handleReset} // Pass handleReset function as onReset prop
          />
        </div>
      </main>
    </div>
  );
}

export default App;
