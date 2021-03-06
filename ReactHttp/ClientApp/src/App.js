import React, { Component } from 'react';
import styles from "./App.module.css";
import Blog from './containers/Blog/Blog';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      // <BrowserRouter basename="/my-app">
      <BrowserRouter>
        <div className={styles.App}>
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
