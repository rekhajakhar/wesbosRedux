
// function which takes state, action
// return state
//take state copy & then return. do not update the state variable
//.slice(): This method creates a new array that contains a portion of the original array. It doesn't modify the original array.
// Spread operator (...): This operator expands the elements of an array (or object) into another array (or object).

//The store automatically calls your reducer functions, passing the current state and the dispatched action as arguments.
// i.e. there is no direct call to this function or any of the reducer's func

function posts(state = [], action) {
    console.log('the post will change');
    console.log(state, action);
    switch(action.type) {
        case 'INCREMENT_LIKES':
            const i = action.index;
            return [
                ...state.slice(0,i),
                {...state[i], likes: state[i].likes + 1},
                ...state.slice(i+1),
            ]
        default:
            return state;
    }
}

export default posts;