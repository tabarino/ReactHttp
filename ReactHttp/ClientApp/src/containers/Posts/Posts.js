import React, { Component } from 'react';
import FullPost from '../FullPost/FullPost';
import Post from '../../components/Post/Post';
import AxiosInstance from '../../AxiosInstance';
import styles from './Posts.module.css';
import { Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';

export class Posts extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    AxiosInstance.get('/api/posts')
      .then(response => {
        const posts = response.data;
        const updatePosts = posts.map(post => {
          return {
            ...post,
            author: 'Ivan'
          }
        });

        this.setState({ posts: updatePosts });
      })
      .catch(error => {
        console.log(error);
        this.setState({ error: true });
      });
  }

  postSelectHandler = (id) => {
    // this.setState({ selectedPostId: id });
    this.props.history.push({ pathname: '/posts/' + id });
  }

  render() {
    let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;

    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          // <Link to={'/' + post.id} key={post.id}>
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            click={this.postSelectHandler.bind(this, post.id)}>
          </Post>
          // </Link>
        );
      });
    }

    return (
      <div>
        <section className={styles.Posts}>
          {posts}
        </section>
        <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
      </div>
    );
  }
}

export default Posts;
