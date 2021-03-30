import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css'

function App() {
  const [test, setTest] = useState(3)
  useEffect(() => {
     console.log(setTest)
  }, [setTest])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p> 
        sdafdsaf
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {
            test == 4  ?'aa':'bb'
        }
      </header>
    </div>
  );
}

export default App;
