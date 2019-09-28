const initialState = {
  number: 25,
  history: []
}

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch(action.type) {
    case "NUM_UP":
      return {
        ...state,
        number: state.number + action.value,
        history: state.history.concat({number: state.number + action.value})
      }
    
    case "NUM_DOWN":
      return {
        ...state,
        number: state.number - action.value,
        history: state.history.concat({number: state.number - action.value})
      }
    
  }
  return newState;
}

export default reducer;