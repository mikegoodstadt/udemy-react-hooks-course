export function saving() {
  return {
    type: 'SAVING',
  };
}

export function deposit() {
  return { type: 'DEPOSIT', payload: 10 };
}

export function depositAsync() {
  return (dispatch) => {
    dispatch(saving());
    setTimeout(() => {
      dispatch(deposit());
    }, 3000);
  };
}
