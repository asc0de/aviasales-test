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
import flexibility from 'flexibility';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
flexibility(document.documentElement);
