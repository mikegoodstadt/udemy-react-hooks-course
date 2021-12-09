import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function HomePage() {
  const balance = useSelector((state) => state.balanceReducer.balance);
  const loan = useSelector((state) => state.loanReducer.loan);
  const dispatch = useDispatch();

  function applyLoanHandle() {
    dispatch({ type: 'APPLY' });
  }

  return (
    <>
      <h1>Balance: {balance}</h1>
      <h2>{loan ? 'Loan Applied' : 'Loan Needed'}</h2>
      <button
        className='button-style'
        disabled={loan ? true : false}
        onClick={applyLoanHandle}
      >
       {loan ? 'Loan pplied for' : 'Apply for Loan'}
      </button>
    </>
  );
}

export default HomePage;
