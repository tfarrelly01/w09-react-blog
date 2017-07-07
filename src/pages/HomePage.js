import React, {Component} from 'react';
import '../styles/HomePage.css';
import axios from 'axios';
import Posts from '../components/Posts';
const API_URL = 'https://react-router-blog-api-ptpsayzdyc.now.sh';

class HomePage extends Component {
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
                this.setState({
                    page: res.data.page,
                    posts: res.data.posts
                });
            })
            .catch(console.log);
    }

    render () {
        return (
            <div className="component-home-page">
                <div className="container">
                    <div className="panel-body">
                        <h3 className="panel-title">
                            Latest Posts ....
                        </h3>
                        <Posts page={this.state.page} posts={this.state.posts}  />
                        {/*<Paginator />*/}
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;