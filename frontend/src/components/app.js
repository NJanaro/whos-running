import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import SplashContainer from '../components/splash/splash_container';

const App = () => (
  <div className="application">
    <NavBarContainer />
    <Switch>
      <Route exact path="/" component={ SplashContainer } />
    </Switch>
  </div>
);

export default App;