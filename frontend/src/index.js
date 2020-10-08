import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './components/root';
import { getElections } from './util/elections_util';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  store = configureStore();
  const root = document.getElementById('root');

  window.store = store;
  ReactDOM.render(<Root store={ store }/>, root);
});

window.getElections = getElections;

