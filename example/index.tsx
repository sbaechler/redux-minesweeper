import 'react-app-polyfill/ie11';
import { store } from './store';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import BadComponent from './bad-component';
import GoodComponent from './good-component';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <GoodComponent />
        <BadComponent />
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
