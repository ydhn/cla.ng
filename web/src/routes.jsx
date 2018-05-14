import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import StartPage from './pages/start';
import JoinPage from './pages/join';
import QuestionView from './pages/question';
import QuestionIndex from './pages/questions';
import AlbumIndex from './pages/albums';
import SettingsPage from './pages/settings';

const routes = (
  <Router>
    <>
      <Route exact path="/" render={() => <Redirect to="/start" />} />
      <Route path="/start" component={StartPage} />
      <Route path="/join" component={JoinPage} />
      <Route exact path="/questions" component={QuestionIndex} />
      <Route path="/questions/:id" component={QuestionView} />
      <Route exact path="/albums" component={AlbumIndex} />
      <Route exact path="/settings" component={SettingsPage} />
    </>
  </Router>
);

export default routes;
