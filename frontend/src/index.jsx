import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './components/root';
import { getElections } from './util/elections_util';
import configureStore from './store/store';
import axios from 'axios';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  store = configureStore();
  const root = document.getElementById('root');

  ReactDOM.render(<Root store={ store }/>, root);
});

window.getElections = getElections;

