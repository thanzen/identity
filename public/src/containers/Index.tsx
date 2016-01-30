import * as React from 'react';
import {render} from 'react-dom';
import {
    Router,
    Route,
    IndexRoute,
} from 'react-router';
import {
    Icon,
} from 'amazeui-react';

// style

// CSS
import '../node_modules/amazeui/dist/css/amazeui.css';

// components
import {
    Header

} from '../components';
import {
    Home
} from '../pages';

import { Store, createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from '../reducers';
import context from '../context';

const store: Store = createStore(reducers);
context.store = store;

const pages = {
    home: Home,
};

let baseDir = (document.getElementById('base_dir') as HTMLInputElement).value;


var App = React.createClass({
    render() {
        return (
            <div className="adm-container">
                <Header />
                <div className="adm-main">
                    {this.props.children}
                </div>
            </div>
        );
    },
});


const Page = React.createClass({
    render() {
        const page = this.props.params.page;
        const {query} = this.props.location;
        const breadcrumb = query && query.breadcrumb;

        if (pages[page]) {
            return React.createElement(
                pages[page], {}
            );
        }
        return (
            <div>
                404
            </div>
        );
    }
});

const routes = (
    <Provider store={store}>
        <Router>
            <Route path="/" component={App}>
                <Route path=":page" component={Page} />
                <IndexRoute component={Home} />
            </Route>
        </Router>
    </Provider>
);

render(routes, document.getElementById('app-root'));
