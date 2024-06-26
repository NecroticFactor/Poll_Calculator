import React, { useState, useEffect } from "react";
import "./App.css";
import Result from "./components/result";
import Selector from "./components/selector";
import Input from "./components/vote_input";

function App() {
  const initialResponseState = {
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

  useEffect(() => {
    // Calculate total whenever response or selectedResponse changes
    const total = Object.values(response).reduce((acc, val) => {
      if (!isNaN(val) && typeof val === "string") {
        return acc + parseInt(val, 10); // Sum up numeric values
      }
      return acc;
    }, 0);

    console.log("Total:", total);

    // Ensure response[selectedResponse] is numeric or default to 0 if undefined
    const selectedValue = response.selectedResponse;
    const selectedValueVotes = response[selectedValue]
      ? parseFloat(response[selectedValue])
      : 0;

    console.log("Selected Value Votes:", selectedValueVotes);

    // Calculate percentage of right answer
    const percentage = total === 0 ? 0 : (selectedValueVotes / total) * 100;

    console.log("Percentage:", percentage);

    // Update results state with calculated values
    setResults({
      totalVotes: total,
      percentageRight: percentage.toFixed(2), // Round to 2 decimal places
    });
  }, [response.selectedResponse]); // Depend on response and selectedResponse changes

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
          <Selector
            response={response}
            selectedResponse={response.selectedResponse}
            handleRadioChange={handleRadioChange}
          />
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
