import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import { App } from './components';

const root = <Provider store={store}><App /></Provider>;

ReactDOM.render(root, document.getElementById('app'));
