import React, { Component } from 'react';
import '../styles/AuthorPage.css';
import axios from 'axios';
import Posts from '../components/Posts';
const API_URL = 'https://react-router-blog-api-ptpsayzdyc.now.sh';

class AuthorPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: '',
      posts: []
    };
  }
  componentDidMount() {
    axios.get(`${API_URL}/authors/${this.props.match.params.name}`)
      .then((res) => {
        console.log(res)
        this.setState({
          page: res.data.page,
          posts: res.data.posts
        });
      })
      .catch(console.log);
  }

  render() {
    return (
      <div className="component-author-page">
        <div className="container">
          <div className="panel-body">
            <h3 className="panel-title">
              Posts by Author ....
            </h3>
            <Posts
              page={this.state.page} posts={this.state.posts}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AuthorPage;