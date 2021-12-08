import React, { useContext } from 'react';
import messageContext from '../contexts/messageContext';
import Outer from './components/outer';

function AboutPage() {
  return (
    <>
      <h1>About Page</h1>
      <h2>{useContext(messageContext)}</h2>
      <Outer />
    </>
  );
}

export default AboutPage;
