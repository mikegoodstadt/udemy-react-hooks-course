import React from 'react';
import {useParams} from 'react-router-dom';

function UserPage() {
  const {user} = useParams();
  return <h1>User: {user}</h1>;
}

export default UserPage;