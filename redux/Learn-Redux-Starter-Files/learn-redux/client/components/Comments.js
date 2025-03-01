import React from 'react';


const Comments = React.createClass({

    renderComment(comment, i) {
        return (
            <div className="comment" key={i}>
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button className="remove-comment" onClick={this.props.removeComment.bind(null, this.props.params.postId, i)}>&times;</button>
                </p>
            </div>
        )
    },
    // why bind is required? If your action creators rely on this context.
    //null in bind function: This sets the this value of the bound function to null. In this case, it's likely that removeComment doesn't rely on the this context, so null is used.
    handleSubmit(e) {
        e.preventDefault(); // JavaScript method that prevents the default behavior of an event.
        //In the context of a form submission, the default behavior is to refresh the entire page and send the form data to the server using a traditional HTTP request
        const { postId } = this.props.params;
        const author = this.refs.author.value; // the value entered by user
        const comment = this.refs.comment.value;
        this.props.addComments(postId, author, comment);
        this.refs.commentForm.reset();
    },
    render() {
        return (
            <div className="comments">
                {this.props.postComments.map(this.renderComment)}
                <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
                    <input type="text" ref="author" placeholder="author"/>
                    <input type="text" ref="comment" placeholder="comment"/>
                    <input type="submit" hidden/>
                </form>
            </div>
        )
    }
})

export default Comments;

// removeComment uses bind because the postId and i are already known when the component renders.
// addComment doesn't need bind because the author and comment values are determined at the time of form submission.
//The choice of whether to use bind or not depends on when and how you have access to the arguments for your action creators.
// If the arguments are readily available when the component renders, bind can be used to pre-fill them.
// If the arguments are determined later (e.g., during an event), you can pass them directly to the action creator without using bind.