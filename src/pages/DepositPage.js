import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function DepositPage() {
  const balance = useSelector((state) => state.balance);
  const dispatch = useDispatch();

  function onDepositHandle() {
    dispatch({type: 'DEPOSIT', payload: 10})
  }

  return (
    <>
      <h1>Balance: {balance}</h1>
      <button onClick={onDepositHandle}>Deposit</button>
    </>
  )
}

export default DepositPage;
