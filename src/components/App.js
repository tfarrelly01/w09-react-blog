import React, {Component} from 'react';
import '../styles/App.css';

import NavBar from './NavBar';
import HomePage from '../pages/HomePage';
import AuthorPage from '../pages/AuthorPage';
import PostPage from './PostPage';


import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <NavBar />
          <Route path="/page/:pageNum" component={HomePage} />
          <Route path="/posts/:postId" component={PostPage} />
          <Route path="/authors/:name/:pageNum" component={AuthorPage} />
        </div>
      </Router>
    );
  }
}

export default App;
