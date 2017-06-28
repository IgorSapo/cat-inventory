import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import routes from './routes';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { loadCats } from './actions/catActions';
import { loadHobbies } from './actions/hobbyAction';

const history = createBrowserHistory();
const store = configureStore();
store.dispatch(loadCats());
store.dispatch(loadHobbies());

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          {routes}
        </Router>
      </Provider>
    )
  }
}

ReactDOM.render(<Root />, document.querySelector('#app'));