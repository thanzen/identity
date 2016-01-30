import * as React from 'react';
import {render} from 'react-dom';
import BaseComponent from '../../BaseComponent';
import {
    Router,
    Route,
    IndexRoute
} from 'react-router';

import Index from './Index';
import Page from './Page';

import {Home,Extractor} from '../../pages';

import { Store, createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from '../../reducers';
import context from '../../context';
import history from "../../history";

// CSS
import '../../../node_modules/amazeui/dist/css/amazeui.css';
import '../../styles/App.css';



const store: Store = createStore(reducers);
context.store = store;

let baseDir = (document.getElementById('base_dir') as HTMLInputElement).value;
let email = (document.getElementById('what_h_l_s') as HTMLInputElement).value;//todo:remove
context.baseDir =baseDir;
context.setUser("", email);

const routes = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Index}>
                <Route path="/extractor" component={Extractor} />
                <IndexRoute component={Home} />
                <Route  path="*" component={ Page } />
            </Route>
        </Router>
    </Provider>
);

render(routes, document.getElementById('app'));
