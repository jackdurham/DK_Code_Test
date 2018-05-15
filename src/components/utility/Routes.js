import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Thankyou from '../pages/Thankyou';

const Routes = () => {
  return(
    <Switch>
      <Route path = "/success" component={Thankyou}/>
      <Route exact path ="/" component={Home} />
    </Switch>
  );
};

export default Routes;
