// React
import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

// Polyfills
import 'promise-polyfill/src/polyfill';
import 'whatwg-fetch';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
