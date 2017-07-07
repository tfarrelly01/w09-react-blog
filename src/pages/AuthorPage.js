import React, {Component} from 'react';
import '../styles/AuthorPage.css';
import axios from 'axios';
import Paginator from '../components/Paginator';
import Posts from '../components/Posts';
const API_URL = 'https://react-router-blog-api-ptpsayzdyc.now.sh';

class AuthorPage extends Component {
  constructor (props) {
    super(props);
    this.state = {
      page: '',
      posts: []
    };
    this.fetchAuthorByPage  = this.fetchAuthorByPage.bind(this);
  }
  componentDidMount () {
      const pageNum = this.props.match.params.pageNum;
      this.fetchAuthorByPage (pageNum);
  }
  
  fetchAuthorByPage (pageNum) {
    console.log(this.props.history.location.pathname);
      axios.get(`${API_URL}/authors/${this.props.match.params.name}?page=${pageNum}`)
          .then((res) => {
              this.setState({
                  page: res.data.page,
                  posts: res.data.posts
              });
          })
          .catch(console.log);
  }

  componentWillReceiveProps (newProps) {
        const currPage = this.props.match.params.pageNum;
        const newPage = newProps.match.params.pageNum;

        if (currPage !== newPage) this.fetchAuthorByPage (newPage);
  }

  render () {
    return (
      <div className="component-author-page">
        <div className="container">
          <div className="panel-body">
            <h3 className="panel-title">
              Posts by Author ....
            </h3>
            <Paginator 
              currPage={Number(this.props.match.params.pageNum)} 
              currPath={this.props.match.url}
            />
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