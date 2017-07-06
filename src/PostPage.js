import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import './PostPage.css';
// import {API_URL} from './config';
const API_URL = 'https://react-router-blog-api-ptpsayzdyc.now.sh';

class PostPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: '',
      PostPage: []
    };
  }
  componentDidMount() {
    axios.get(`${API_URL}/PostPage`)
      .then((res) => {
        console.log(res.data);
        this.setState({
          page: res.data.page,
          PostPage: res.data.PostPage
        });
      })
      .catch(console.log);
  }

  render() {
    return (
      <div className="component-PostPage">
        <div className="panel">
          <div className="panel-body">
            <h3 className="panel-title">
              PostPage
                        </h3>
            {this.state.PostPage.sort(this.state.id).map((post) => (
              <Post
                key={post.id}
                id={post.id}
                author={post.author}
                createdAt={post.createdAt}
                title={post.title}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const PostPage = (props) => (
  <div className="component-post">
    <p>{props</p>
    <p>{props.createdAt}</p>
    <p>{props.author}</p>
  </div>
);

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired
};

export default PostPage;