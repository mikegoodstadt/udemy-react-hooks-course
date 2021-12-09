import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function WithdrawalPage() {
  const balance = useSelector((state) => state.balanceReducer.balance);
  const loan = useSelector((state) => state.loanReducer.loan);
  const dispatch = useDispatch();

  function onDepositHandle() {
    dispatch({type: 'WITHDRAWAL', payload: 10})
  }

  return (
    <>
      <h1>Balance: {balance}</h1>
      <button onClick={onDepositHandle}>Withdrawal</button>
      <h2>{loan ? 'Loan Applied' : 'Loan Needed'}</h2>
    </>
  )
}

export default WithdrawalPage;
