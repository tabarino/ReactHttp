import React, { Component } from 'react';
import Post from '../../components/Post/Post';
import AxiosInstance from '../../AxiosInstance';
import styles from './Posts.module.css';

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
    this.setState({ selectedPostId: id });
  }

  render() {
    let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;

    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            click={this.postSelectHandler.bind(this, post.id)}>
          </Post>
        );
      });
    }

    return (
      <section className={styles.Posts}>
        {posts}
      </section>
    );
  }
}

export default Posts;
