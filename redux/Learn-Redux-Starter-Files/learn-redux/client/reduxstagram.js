import React from 'react';

import {render} from 'react-dom';

import css from './styles/style.styl';

import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';
import {Provider} from 'react-redux';
import store, { history} from './store';
import App from './components/App';

const router = (
    <Provider store={store}>
    <Router history={history}>
        <Route path="/" component={App}>
            <IndexRoute component={PhotoGrid}></IndexRoute>
            <Route path="/view/:postId" component={Single}></Route>
        </Route>
    </Router>
    </Provider>
)
//{/* provider helps to access the redux store */}
//{/* uses history to manage the navigation */}
//{/*  app will render at the root i.e. / */}
//{/*  inside / photo grid is shown */}

// rendering the router with id = root
render(router, document.getElementById('root'));
// this file is the entry point after index.html file

// history is an object that encapsulates the browser's history API.
// This is very useful for time travel debugging

//IndexRoute is used to render at the root path i.e. /
// both app & photogrid are rendered at root path /


//React Router recognizes :postId as a URL parameter.
