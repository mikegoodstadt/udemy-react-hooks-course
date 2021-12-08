import React, { useContext } from 'react';
import loggedInContext from '../../contexts/loggedInContext';
import messageContext from '../../contexts/messageContext';

function Inner() {
  const [loggedIn, setLoggedIn] = useContext(loggedInContext);
  const [message, setMessage] = useContext(messageContext);

  return (
    <>
      <h3>Inner</h3>
      <button onClick={() => setMessage(Math.random().toString())}>
        Change
      </button>
      <button onClick={() => setLoggedIn(!loggedIn)}>Login/Out</button>
      <h2>LoggedIn: {loggedIn.toString()}</h2>
    </>
  );
}

export default Inner;
