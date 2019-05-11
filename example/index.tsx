import 'react-app-polyfill/ie11';
import { store } from './store';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import BadComponent from './bad-component';
import GoodComponent from './good-component';
import GoodFunctionalComponent from './good-functional-component';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <GoodComponent />
        <GoodFunctionalComponent />
        <BadComponent />
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
