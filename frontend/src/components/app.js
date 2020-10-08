import React from 'react';
import { Route } from 'react-router-dom';
import SplashContainer from '../components/splash/splash_container';
import NavbarContainer from '../components/nav/nav_container';
import UserQueryingContainer from './user_quering/user_querying_container';
import {MapContainer} from './map/map';



const App = () => (
  <div className="application">
    <Route path="/" component={ NavbarContainer } />
    <Route exact path="/" component={ SplashContainer } />
    <Route exact path="/representatives" component={ UserQueryingContainer} />
    <Route exact path="/map" component={MapContainer} />
  </div>
);

export default App;