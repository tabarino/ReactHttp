import React, { Component } from 'react';
import axios from 'axios';
import styles from './FullPost.module.css';

export class FullPost extends Component {
  state = {
    loadedPost: null
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate() {
    this.loadData();
  }

  loadData() {
    if (!this.props.match.params.id) {
      return;
    }

    if (!this.state.loadedPost) {
      this.loadPostHandler();
      return;
    }

    // The + converts this.props.match.params.id to number to be able to compare with the loadedPost.id
    if (this.state.loadedPost && this.state.loadedPost.id !== +this.props.match.params.id) {
      this.loadPostHandler();
      return;
    }
  }

  loadPostHandler = () => {
    axios.get('/api/posts/' + this.props.match.params.id)
      .then(response => {
        this.setState({ loadedPost: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  deletePostHandler = () => {
    axios.delete('/api/posts/' + this.props.match.params.id)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;

    if (this.props.match.params.id) {
      post = <p style={{ textAlign: 'center' }}>Loading...</p>;
    }

    if (this.state.loadedPost) {
      post = (
        <div className={styles.FullPost}>
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className={styles.Edit}>
            <button className={styles.Delete} onClick={this.deletePostHandler}>Delete</button>
          </div>
        </div>
      );
    }

    return post;
  }
}

export default FullPost;
