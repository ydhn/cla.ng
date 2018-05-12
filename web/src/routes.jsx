import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import StartPage from './pages/start';
import TodayPage from './pages/todays';
import AlbumPage from './pages/albums';
import SettingsPage from './pages/settings';

const routes = (
  <Router>
    <>
      <Route exact path="/" render={() => <Redirect to="/start" />} />
      <Route path="/start" component={StartPage} />
      <Route path="/todays" component={TodayPage} />
      <Route path="/albums" component={AlbumPage} />
      <Route path="/settings" component={SettingsPage} />
    </>
  </Router>
);

export default routes;
