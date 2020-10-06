import React from 'react';
import { Route } from 'react-router-dom';
import SplashContainer from '../components/splash/splash_container';
import NavbarContainer from '../components/nav/nav_container';



const App = () => (
  <div className="application">
    <Route path="/" component={ NavbarContainer } />
    <Route exact path="/" component={ SplashContainer } />
  </div>
);

export default App;