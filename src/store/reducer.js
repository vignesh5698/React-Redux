const initialState = {
    number: 25
}

const reducer = (state = initialState, action) => {
    const newState = { ...state };

    if(action.type === 'NUM_UP') {
        newState.number++;
    }
    if(action.type === 'NUM_DOWN') {
        newState.number--;
    }

    return newState;
}

export default reducer;