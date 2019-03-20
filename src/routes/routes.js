import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/home';
import Products from '../pages/products';
import Contacts from '../pages/contacts';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/products" component={Products} />
    <Route path="/contacts" component={Contacts} />
  </Switch>
);

export default Routes;
