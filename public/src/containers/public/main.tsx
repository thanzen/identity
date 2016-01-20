import * as React from 'react';
import {render} from 'react-dom';
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

// CSS
import '../../../node_modules/amazeui/dist/css/amazeui.css';
import '../../styles/App.css';


const routes = (
  <Router>
    <Route path="/" component={Index}>
      <Route path=":page" component={Page} />
      <IndexRoute component={Home} />
    </Route>
  </Router>
);

render(routes, document.getElementById('app'));
