import React, {Component} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import '../styles/Posts.css';

class Posts extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className="component-posts">
                <div className="container">
                    <div className="panel-body">
                        <h3 className="panel-title">
                            Posts
                        </h3>
                        {this.props.posts.sort(this.props.posts.createdAt).map((post) => (
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

Posts.propTypes = {
    posts: PropTypes.array.isRequired
};

const Post = (props) => (
    <div className="component-post"> 
        <Link to={`/posts/${props.id}`}>{props.title}</Link>
        <p>{props.createdAt}</p> 
        <p>{props.author}</p>  
    </div>
);

Post.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
};

export default Posts;