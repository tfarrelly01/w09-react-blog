import React, {Component} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import './Posts.css';
// import {API_URL} from './config';
const API_URL = 'https://react-router-blog-api-ptpsayzdyc.now.sh';

class Posts extends Component {
    constructor (props) {
        super(props);
        this.state = {
            page: '',
            posts: []
        };
    }
    componentDidMount () {
        axios.get(`${API_URL}/posts`)
            .then((res) => {
                console.log(res.data);
                this.setState({
                    page: res.data.page,
                    posts: res.data.posts
                });
            })
            .catch(console.log);
    }

    render () {
        return (
            <div className="component-posts">
                <div className="panel">
                    <div className="panel-body">
                        <h3 className="panel-title">
                            Posts
                        </h3>
                        {this.state.posts.map((post, i) => (
                            <Post
                                key={i}
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

const Post = (props) => (
    <div className="component-post"> 
        <p>{props.key}</p>
        <p>{props.title}</p>
        <p>{props.createdAt}</p> 
        <p>{props.author}</p>  
    </div>
);

Post.propTypes = {
    key: PropTypes.number.isRequired,
    title: PropTypes.number.isRequired,
    createdAt: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
};

export default Posts;