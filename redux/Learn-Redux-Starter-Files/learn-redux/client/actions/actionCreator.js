
// increment/ decrement likes
export function increment(index) {
    return{
        type: 'INCREMENT_LIKES',
        index
    }
}


// add comments
export function addComments(postId, author, comment){
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment
    }
}


// remove comments
export function deleteComment(postId, i) {
    return {
        type: 'DELETE_COMMENT',
        postId,
        i
    }
}

