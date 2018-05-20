import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import StartPage from './pages/start';
import JoinPage from './pages/join';
import QuestionView from './pages/question';
import QuestionIndex from './pages/questions';
import ResponsesView from './pages/responses';
import ResourceEdit from './components/resources/new';
import AlbumIndex from './pages/albums';
import AlbumView from './pages/album';
import AlbumPhotoEdit from './components/albums/photos/edit';
import AlbumPhotoView from './components/albums/photos/view';
import SettingsPage from './pages/settings';

const routes = (
  <Router>
    <>
      <Route exact path="/" render={() => <Redirect to="/start" />} />
      <Route path="/start" component={StartPage} />
      <Route path="/join" component={JoinPage} />
      <Route exact path="/questions" component={QuestionIndex} />
      <Route exact path="/questions/:id" component={QuestionView} />
      <Route exact path="/questions/:id/responses" component={ResponsesView} />
      <Route path="/questions/:id/responses/new/:resource_type" component={ResourceEdit} />
      <Route exact path="/albums" component={AlbumIndex} />
      <Route exact path="/albums/:id" component={AlbumView} />
      <Route exact path="/albums/:id/new" component={AlbumPhotoEdit} />
      <Route exact path="/albums/:id/photos/:photo_id" component={AlbumPhotoView} />
      <Route exact path="/settings" component={SettingsPage} />
    </>
  </Router>
);

export default routes;
