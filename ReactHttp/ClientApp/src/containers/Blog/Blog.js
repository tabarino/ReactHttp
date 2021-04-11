import React, { Component } from 'react';
import axios from 'axios';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import Post from '../../components/Post/Post';
import styles from './Blog.module.css';

class Blog extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    axios.get('/api/posts')
      .then(response => {
        this.setState({ posts: response.data });
      });
  }

  render() {
    const posts = this.state.posts.map(post => {
      return <Post key={post.id} title={post.title} />
    });

    return (
      <div>
        <section className={styles.Posts}>
          {posts}
        </section>
        <section>
          <FullPost />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
