import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [advise,setAdvise] = useState('');
  
  useEffect(() => {
      fetch("https://api.adviceslip.com/advice")
        .then(res => res.json())
        .then(
          (advise) => {
            setAdvise(advise.slip.advice);
          }
        )
  },[]);

  let fetchNewAdvise = () => {
    fetch("https://api.adviceslip.com/advice")
        .then(res => res.json())
        .then(
          (advise) => {
            setAdvise(advise.slip.advice);
          }
        )

  }

  return (
    <div className="App">
      <div className="quote">  
        <h2>{advise}</h2>
      </div>
      <button className="Btn-Advice" onClick={fetchNewAdvise} >Advice Me</button>
    </div>
  );
}

export default App;
