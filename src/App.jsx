import './App.css';
import Result from './components/result';
import Selector from './components/selector';
import Input from './components/vote_input';
import Reset from './components/all_clear';

function App() {
  return (
    <div className='App-container'>
            <div className='voter'>
               <h1 id='main'>THE POLL<br />COUNTER</h1>
               <h2 id="heading">Calculate the results of your<br /> social media polls.</h2>
            </div>
            <div>
              <Input />
            </div>
           <div className='Selector-container'>
              <Selector/>
           </div>
           <div className='Result-container'>
              <Result/>
           </div>
           <div className='Reset-container'>
              <Reset/>
           </div>
    </div>
    );
}

export default App;
