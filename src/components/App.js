import React, { Component } from 'react';
import '../styles/App.css';

// import Proptypes from 'prop-types'
import NavBar from './NavBar';
import HomePage from '../pages/HomePage';
// import PostPage from '../pages/PostPage';
import AuthorPage from '../pages/AuthorPage';
import Posts from './Posts';
import PostPage from './PostPage';


import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={HomePage} />
          <Route path="/posts/:postId" component={PostPage} />
          <Route exact path="/authors/:name" component={AuthorPage} />
        </div>
      </Router>
    );
  }
}

export default App;
