import React from 'react';
import './App.scss';
import MyComp from './components/MyComp';

function App() {
  function onClickHandler() {
    console.log('clicked');
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <MyComp onClick={onClickHandler} str={1}></MyComp>
      </header>
    </div>
  );
}

export default App;
