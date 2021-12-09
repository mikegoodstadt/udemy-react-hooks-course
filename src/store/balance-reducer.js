const initialState = {
  balance: 0,
  saving: false,
};

function balanceReducer(state = initialState, action) {
  switch ((action.type)) {
    case 'DEPOSIT':
      return { balance: state.balance + action.payload, saving: false };
    case 'WITHDRAWAL':
      return { balance: state.balance - action.payload, saving: false };
    case 'SAVING':
      return {...state, saving: true}
    default:
      return state;
  }
}

export default balanceReducer;
