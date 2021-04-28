import React, { Component } from 'react';
import Posts from '../Posts/Posts';
import NewPost from '../NewPost/NewPost';
// import FullPost from '../FullPost/FullPost';
import styles from './Blog.module.css';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Blog extends Component {
  render() {
    return (
      <div className={styles.Blog}>
        <header>
          <nav>
            <ul>
              <li><NavLink exact activeStyle={{ fontWeight: 'bold', color: '#fa923f' }} to="/posts">Posts</NavLink></li>
              <li><NavLink exact activeStyle={{ fontWeight: 'bold', color: '#fa923f' }} to={{
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
        {/* <Route path="/" exact component={Posts} /> */}
        <Switch>
          <Route path="/new-post" component={NewPost} />
          <Route path="/posts" component={Posts} />
          <Redirect from="/" to="/posts" />
          {/* <Route path="/:id" exact component={FullPost} /> */}
        </Switch>
      </div>
    );
  }
}

export default withRouter(Blog);
