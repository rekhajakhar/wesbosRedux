
// function which takes state, action
// return state

function posts(state = [], action) {
    console.log('the post will change');
    console.log(state, action);
    return state;
}

export default posts;