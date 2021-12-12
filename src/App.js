//@flow
import React from 'react';
import './App.scss';
import MyComp from './components/MyComp';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <MyComp name='Peter'></MyComp>
      </header>
    </div>
  );
}

export default App;
