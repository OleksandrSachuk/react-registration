import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Registration from '../modules/registartion/components';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={ Registration } />
      <Route path='/sign-up' component={ Registration } />
      <Route path='/login' component={ Registration } />
      <Route path='/contacts' component={ Registration } />
    </Switch>
  </main>
);

export default Main;