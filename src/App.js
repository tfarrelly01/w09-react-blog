import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
// import Proptypes from 'prop-types'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const API_URL = 'https://react-router-blog-api-ptpsayzdyc.now.sh';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page : '',
      posts: []
    };
  }

  componentDidMount() {
    axios.get(`${API_URL}/posts`)
      .then((res) => {
        console.log(res.data)
        this.setState({
          posts: res.data.posts
        });
      })
      .catch(console.log);
  }

  render() {
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

const Posts = () => (
  <div><h2>Posts</h2></div>
);

const Authors = () => (
  <div>
    <h2>Author</h2>
  </div>
);






export default App;
