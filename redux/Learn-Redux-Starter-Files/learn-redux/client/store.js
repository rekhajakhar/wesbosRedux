
import { createStore } from 'redux';

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

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;