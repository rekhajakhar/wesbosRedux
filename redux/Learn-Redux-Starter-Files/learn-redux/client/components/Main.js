import React from 'react';
import {Link} from 'react-router';

const Main = React.createClass({
    render() {
        return (
            <div>z
                <h1>
                <Link to="/">Reduxstagram</Link>
                </h1>
                {React.cloneElement(this.props.children, this.props)}
            </div>
        )
    }
})

export default Main;

// cloneElement: It allows you to modify the props of an existing element or add new props without directly changing the original element.`
// it is passing the props to the children component, ususally used in react routers
// similar to how we do not update/modify the state but create a new state & pass
// which helps in debugging in redux like time travel in dev tools
// from here next we will go to the url which is rendered from there we will go to the component which is rendering it
// The Main component acts as a layout component, and it renders the matched component as this.props.children