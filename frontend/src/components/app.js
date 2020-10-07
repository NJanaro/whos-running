import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import SplashContainer from '../components/splash/splash_container';
import NavbarContainer from '../components/nav/nav_container';
import UserQueryingContainer from './user_quering/user_querying_container';



const App = () => (
  <div className="application">
    <Route path="/" component={ NavbarContainer } />
    <Route exact path="/" component={ SplashContainer } />
    <Route exact path="/representatives" component={ UserQueryingContainer} />
  </div>
);

export default App;