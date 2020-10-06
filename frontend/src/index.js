import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
<<<<<<< HEAD
import App from './components/app';
import * as serviceWorker from './serviceWorker';
=======
import Root from './components/root';
import { getElections } from './util/elections_util';
import configureStore from './store/store';
>>>>>>> 61d75b477532011919055cf839760ad0538e884a

document.addEventListener('DOMContentLoaded', () => {
  let store;
  store = configureStore();
  const root = document.getElementById('root');

  ReactDOM.render(<Root store={ store }/>, root);
});

window.getElections = getElections;

<<<<<<< HEAD
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

=======
>>>>>>> 61d75b477532011919055cf839760ad0538e884a
