import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import StartPage from './pages/start';
import JoinPage from './pages/join';
import QuestionView from './pages/question';
import QuestionIndex from './pages/questions';
import ResponsesView from './pages/responses';
import AlbumIndex from './pages/albums';
import SettingsPage from './pages/settings';

const routes = (
  <Router>
    <>
      <Route exact path="/" render={() => <Redirect to="/start" />} />
      <Route path="/start" component={StartPage} />
      <Route path="/join" component={JoinPage} />
      <Route exact path="/questions" component={QuestionIndex} />
      <Route exact path="/questions/:id" component={QuestionView} />
      <Route path="/questions/:id/responses" component={ResponsesView} />
      <Route exact path="/albums" component={AlbumIndex} />
      <Route exact path="/settings" component={SettingsPage} />
    </>
  </Router>
);

export default routes;
