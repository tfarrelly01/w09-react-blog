import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import '../styles/Posts.css';


class Posts extends Component {

    render() {
        return (
            <div className="component-posts">
                <div className="container">
                    <div className="panel-body">
                        <h3 className="panel-title">
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
        <p><Link to={`/authors/${props.author}`}>{props.author}</Link></p>
        <p><Link to={`/posts/${props.id}`}>{props.title}</Link></p>
        <p>{props.createdAt}</p>
    </div>
);

Post.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
};

export default Posts;