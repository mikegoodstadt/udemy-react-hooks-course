import React, {useState} from 'react';
import './App.scss';

function App() {
  const [name, setName] = useState("");
  const [income, setIncome] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleIncomeChange(e) {
    setIncome(e.target.value);
  }

  function onSubmitHandle(e) {
    //e.preventDefault();
    console.log('State =', name, income);
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <form onSubmit={onSubmitHandle}>
          <div>
            <span>Name:</span>
            <input value={name} type="text" onChange={handleNameChange}></input>
          </div>
          <div>
            <span>Income:</span>
            <select value={income} onChange={handleIncomeChange}>
              <option value="high">High</option>
              <option value="mid">Mid</option>
              <option value="low">Low</option>
            </select>
            <input type="submit" value="submit"></input>
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
