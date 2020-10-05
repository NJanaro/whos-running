import React from 'react';

import Splash from './splash/splash';

const App = () => (
  <div>
    <AuthRoute exact path="/" component={ Splash } />
  </div>
);

export default App;