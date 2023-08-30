import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/normalize.css';
import './assets/css/components.css';
import './assets/css/vervoe.css';
import Router from './router/Router';

const App = () => ( <Router /> )

ReactDOM.render(<App />, document.getElementById('app'));

if (module.hot) {
    module.hot.accept();
}
