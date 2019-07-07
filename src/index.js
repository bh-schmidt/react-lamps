import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { configureToastr } from './shared/toastr/ToastrHandler';
import './styles/index.scss'

configureToastr();
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
