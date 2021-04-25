import React, { Component } from 'react';
import Posts from '../Posts/Posts';
import NewPost from '../NewPost/NewPost';
import styles from './Blog.module.css';
import { Route, NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Blog extends Component {
  render() {
    console.log(this.props);

    return (
      <div className={styles.Blog}>
        <header>
          <nav>
            <ul>
              <li><NavLink exact activeStyle={{fontWeight: 'bold', color: '#fa923f'}} to="/">Home</NavLink></li>
              <li><NavLink exact activeStyle={{fontWeight: 'bold', color: '#fa923f'}} to={{
                pathname: '/new-post'
                // pathname: this.props.match.url + '/new-post',
                // hash: '#submit',
                // search: '?quick-submit=true'
              }}>New Post</NavLink></li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render={() => <h1>Home</h1>} />
        <Route path="/" exact render={() => <h1>Home2</h1>} /> */}
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" exact component={NewPost} />
      </div>
    );
  }
}

export default withRouter(Blog);
