import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/PostPage.css';
// import {API_URL} from './config';
const API_URL = 'https://react-router-blog-api-ptpsayzdyc.now.sh';

class PostPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postPage: {}
    };
  }
  componentDidMount() {
    axios.get(`${API_URL}/posts/${this.props.match.params.postId}`)
      .then((res) => {
        console.log(res.data);
        this.setState({
          postPage: res.data.post
        });
      })
      .catch(console.log);
  }

  render() {
    return (
      <div className="component-postpage">
        <div className="panel">
          <div className="panel-body">
            <h3 className="panel-title">
              <p>{this.state.postPage.id}</p>
              <p>{this.state.postPage.title}</p>
              <p>{this.state.postPage.createdAt}</p>
              <p>{this.state.postPage.body}</p>
              <p><Link to={`/authors/${this.state.postPage.author}`}>{this.state.postPage.author}</Link></p>
              <p>{this.state.postPage.avatarUrl}</p>
            </h3>
          </div>
        </div>
      </div>
    );
  }
}


PostPage.propTypes = {
  postId: PropTypes.number.isRequired
};

export default PostPage;