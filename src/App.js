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
        <div className="advise">  
          <h2 className="text">{advise}</h2>
          <button className="Btn-Advice" onClick={fetchNewAdvise} >Tell me something</button>
        </div>
        <footer>
          <p className="footer">Developed by @Rifadh</p>
        </footer>
        
    </div>
    
  );
}

export default App;
