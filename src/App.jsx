import "./App.css";
import Result from "./components/result";
import Selector from "./components/selector";
import Input from "./components/vote_input";

function App() {
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
          <Input />
          <Selector />
          <Result />
        </div>
      </main>
    </div>
  );
}

export default App;
