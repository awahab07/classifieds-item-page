import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app/App';
import * as serviceWorker from './app/serviceWorker';
import { HmrAcceptor, runForHmr } from './shared/utils/hmr';
import store, { acceptHotStore } from './store';

const render = (): void => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
};

render();

const acceptHotApp = (accept: HmrAcceptor): void => {
  accept('./app/App', render);
};

runForHmr([acceptHotStore, acceptHotApp]);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
