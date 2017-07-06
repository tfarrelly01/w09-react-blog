import React, {Component} from 'react';
import './App.css';

// import Proptypes from 'prop-types'
import Posts from './Posts';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/posts">Posts</Link></li>
            <li><Link to="/authors">Authors</Link></li>
          </ul>
          <div className="App">
            <h1>Hello Northcoders!</h1>
          </div>
          <Route exact path="/" component={Home} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/authors" component={Authors} />
        </div>
      </Router>
    );
  }
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const Authors = () => (
  <div>
    <h2>Author</h2>
  </div>
);

export default App;
