import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as balanceActions from './../actions/balanceActions';

function DepositPage() {
  const balance = useSelector((state) => state.balanceReducer.balance);
  const loan = useSelector((state) => state.loanReducer.loan);
  const saving = useSelector((state) => state.balanceReducer.saving);

  const dispatch = useDispatch();

  function onDepositHandle() {
    dispatch(balanceActions.depositAsync());
  }

  return (
    <>
      {saving ? <h1>Saving...</h1> : <h1>Balance: {balance}</h1>}
      <button onClick={onDepositHandle}>Deposit</button>
      <h2>{loan ? 'Loan Applied' : 'Loan Needed'}</h2>
    </>
  );
}

export default DepositPage;
