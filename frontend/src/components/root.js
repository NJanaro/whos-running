import React from 'react';
// import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './app';

const Root = () => (
//   <Provider >
    <HashRouter>
      <App />
    </HashRouter>
//   </Provider>
);

export default Root;