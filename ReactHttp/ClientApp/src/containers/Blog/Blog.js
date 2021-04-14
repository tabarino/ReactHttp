import React, { Component } from 'react';
// import axios from 'axios';
import AxiosInstance from '../../AxiosInstance';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import Post from '../../components/Post/Post';
import styles from './Blog.module.css';

class Blog extends Component {
  state = {
    posts: [],
    selectedPostId: null,
    error: false
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
      <div>
        <section className={styles.Posts}>
          {posts}
        </section>
        <section>
          <FullPost id={this.state.selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
