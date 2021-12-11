import React from 'react';
import './App.scss';
import Button from './components/Button/Button';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Button type='primary'>Click Me!</Button>
        <Button type='secondary'>Warning!</Button>
        <Button type='disabled'>Click Me!</Button>
      </header>
    </div>
  );
}

export default App;
