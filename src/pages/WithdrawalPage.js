import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function WithdrawalPage() {
  const balance = useSelector((state) => state.balance);
  const dispatch = useDispatch();

  function onDepositHandle() {
    dispatch({type: 'WITHDRAWAL', payload: 10})
  }

  return (
    <>
      <h1>Balance: {balance}</h1>
      <button onClick={onDepositHandle}>Withdrawal</button>
    </>
  )
}

export default WithdrawalPage;
