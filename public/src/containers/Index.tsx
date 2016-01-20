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
  Header,
  PageContainer
} from '../components';
import {
  Home
} from '../pages';

const pages = {
  home: Home,
};

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
      <PageContainer>
       404
      </PageContainer>
    );
  }
});

const routes = (
  <Router>
    <Route path="/" component={App}>
      <Route path=":page" component={Page} />
      <IndexRoute component={Home} />
    </Route>
  </Router>
);

render(routes, document.getElementById('app-root'));
