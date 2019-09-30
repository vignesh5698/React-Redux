const initialState = {
  number: 25,
  history: [],
  incrementedValue: 1
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "NUM_UP":
      return {
        ...state,
        number: action.value,
        history: action.history
      }
    
    case "NUM_DOWN":
      return {
        ...state,
        number: action.value,
        history: action.history
      }
    default:
        return state;    
  }  
}

export default reducer;