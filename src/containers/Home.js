import React from 'react';
import { withSiteData } from 'react-static';
import Main from '../components/Main';
import Courses from '../components/Courses';

export default withSiteData(() => (
  <div>
    <Main />
    <Courses />
  </div>
));
