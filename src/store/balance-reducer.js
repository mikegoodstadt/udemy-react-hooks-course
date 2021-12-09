const initialState = {
  balance: 0,
};

function balanceReducer(state = initialState, action) {
  switch ((action.type)) {
    case 'DEPOSIT':
      return { balance: state.balance + action.payload };
    case 'WITHDRAWAL':
      return { balance: state.balance - action.payload };
    default:
      return state;
  }
}

export default balanceReducer;