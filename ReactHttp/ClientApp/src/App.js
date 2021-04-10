import React, { Component } from 'react';
import styles from "./App.module.css";
import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Blog />
      </div>
    );
  }
}

export default App;
