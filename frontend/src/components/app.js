import React from 'react';
import { Route } from 'react-router-dom';
import Splash from './splash/splash';

const App = () => (
  <div className="application">
    <Route exact path="/" component={ Splash } />
  </div>
);

export default App;