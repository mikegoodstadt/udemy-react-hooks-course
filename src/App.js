import React, { useRef, useEffect } from 'react';
import './App.css';
import Input from './components/input';

const inputStyle = {
  width: '400px',
  height: '40px',
  fontSize: '30px',
  marginBotton: '10px',
};

function App() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  useEffect(() => {
    lastNameRef.current.focus();
  }, []);

  function firstKeyDown(e){
    if(e.key === "Enter") {
      lastNameRef.current.focus();
    }
  }

  function lastKeyDown(e){
    if(e.key === "Enter") {
      firstNameRef.current.focus();
    }
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <Input
          ref={firstNameRef}
          placeholder='type first name here'
          style={inputStyle}
          onKeyDown={firstKeyDown}
        ></Input>
        <Input
          ref={lastNameRef}
          placeholder='type last name here'
          style={inputStyle}
          onKeyDown={lastKeyDown}
        ></Input>
      </header>
    </div>
  );
}

export default App;
