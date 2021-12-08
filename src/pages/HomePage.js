import React, { useContext } from 'react';
import messageContext from '../contexts/messageContext';

function HomePage() {
  return (
    <>
      <h1>Welcome!</h1>
      <h2>{useContext(messageContext)}</h2>
    </>
  );
}

export default HomePage;
