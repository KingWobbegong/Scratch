import React from 'react';

import { Router, IndexRoute } from 'react-router';

import PictureContainer from './PictureContainer';
import UploadContainer from './UploadContainer.jsx';
import VoteContainer from './VoteContainer';
import SignInContainer from './SignInContainer.jsx';

const routes = (
  <Route path="/" component={PictureContainer}>
    <IndexRoute component={PictureContainer} />
    <Route path="/upload" component={UploadContainer} />
    <Route path="/vote" component={VoteContainer} />
    <Route path="signIn" component={SignInContainer} />
  </Route>
);

export default routes;
