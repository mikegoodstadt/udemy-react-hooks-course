import React, {useContext, useState} from 'react';
import {useParams} from 'react-router-dom';
import loggedInContext from '../contexts/loggedInContext';

function UserPage() {
  const {user} = useParams();
  const [loggedIn, setLoggedIn] = useContext(loggedInContext);
  const [age, setAge] = useState(null);

  function onChangeHandle(e) {
    setAge(e.target.value);
  }

  return (
    <>
      <h1>User: {user}</h1>
      <h2>Age: {age ? age : 'enter age'}</h2>
      <input type='text' value={age} onChange={onChangeHandle}></input>
      <h2>{loggedIn.toString()}</h2>
    </>
  )
}

export default UserPage;