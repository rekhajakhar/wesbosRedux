import React from 'react';
import Photo from './Photo';

const PhotoGrid = React.createClass({
    render() {
        return (
            <div className="photo-grid">
                {this.props.posts.map((post, i) => (
                    <Photo {...this.props} key={i} i={i} post={post} />
                ))}
            </div>
        )
    }
})

export default PhotoGrid;

// Keys are essential for React to efficiently update lists and prevent rendering issues

//...this.props passes all existing props to the Photo component.
// Explicitly passing i and post ensures that these specific props are available and have the intended values, potentially overriding any existing props with the same names.