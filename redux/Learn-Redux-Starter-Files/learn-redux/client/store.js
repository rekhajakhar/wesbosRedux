
import {compose, createStore} from 'redux';

import rootReducer from './reducers/index';

import posts from './data/posts';
import comments from './data/comments';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

//default obj
const defaultState = {
    posts,
    comments
};

// enabling the redux dev tool extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, defaultState, composeEnhancers());
// rootReducer is centralized reducer function that manages the entire redux app

export const history = syncHistoryWithStore(browserHistory, store);

//hot reloading the store
if(module.hot) {
    module.hot.accept('./reducers/', () => { // listen to the chnages in reducer directory
        const nextRootReducer = require('./reducers/index').default;
        store.replaceReducer(nextRootReducer); // update the reducer with this react function
    });
}

export default store;