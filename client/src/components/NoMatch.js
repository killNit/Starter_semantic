import React from 'react';
import { Link, } from 'react-router-dom';
import { Header, } from 'semantic-ui-react';

const NoMatch = () => (
  <div>
    This is not Myspace or any other space 404 error.
    <Link to="/">Home Page</Link>
  </div>
)

export default NoMatch;