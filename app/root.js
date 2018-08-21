import React from 'react';
import { Provider } from 'react-redux';
import getStore from './store/index.js';

import App from './containers/components/App.js';

const store =  getStore();

const Root = () =>
    (
        <Provider store={store}>
            <App/>
        </Provider>
    );

export default Root;
