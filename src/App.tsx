import React from 'react';
import './App.css';
import MyComp from './components/MyComp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyComp name='Mike' gender='M' flexible={'flexible field'}></MyComp>
      </header>
    </div>
  );
}

export default App;
