import React from 'react';

import {render} from 'react-dom';

import css from './styles/style.styl';

import Main from './components/main';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';
import {Provider} from 'react-redux';
import store, { history} from './store';

const router = (
    <Provider store={store}>
    <Router history={history}>
        <Route path="/" component={Main}>
            <IndexRoute component={PhotoGrid}></IndexRoute>
            <Route path="/view/:postId" component={Single}></Route>
        </Route>
    </Router>
    </Provider>
)


render(router, document.getElementById('root'));
