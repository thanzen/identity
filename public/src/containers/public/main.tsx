import * as React from 'react';
import {render} from 'react-dom';
import BaseComponent from '../../BaseComponent';
import {
    Router,
    Route,
    IndexRoute,
} from 'react-router';

import Index from './Index';
import Page from './Page';
import {
    Home
} from '../../pages';

import { Store, createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from '../../reducers';
import context from '../../context';

// CSS
import '../../../node_modules/amazeui/dist/css/amazeui.css';
import '../../styles/App.css';


const store: Store = createStore(reducers);
context.store = store;

let baseDir = (document.getElementById('base_dir') as HTMLInputElement).value;
BaseComponent.setBaseDir(baseDir);
const routes = (
    <Provider store={store}>
        <Router>
            <Route path="/" component={Index}>
                <Route path=":page" component={Page} />
                <IndexRoute component={Home} />
            </Route>
        </Router>
    </Provider>
);

render(routes, document.getElementById('app'));
