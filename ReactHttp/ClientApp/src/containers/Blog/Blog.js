import React, { Component, Suspense } from 'react';
import Posts from '../Posts/Posts';
// import NewPost from '../NewPost/NewPost';
// import FullPost from '../FullPost/FullPost';
// import AsyncComponent from '../../hoc/AsyncComponent/AsyncComponent';
import styles from './Blog.module.css';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

// const AsyncNewPost = AsyncComponent(() => {
//   return import('../NewPost/NewPost');
// });
const AsyncNewPost = React.lazy(() => {
  return import('../NewPost/NewPost');
});

class Blog extends Component {
  state = {
    auth: true
  }

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
          {/* {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null} */}
          {this.state.auth ? <Route path="/new-post" render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <AsyncNewPost />
            </Suspense>
          )} /> : null}
          <Route path="/posts" component={Posts} />
          <Route render={() => <h1>Not Found</h1>} />
          {/* <Redirect from="/" to="/posts" /> */}
          {/* <Route path="/:id" exact component={FullPost} /> */}
        </Switch>
      </div>
    );
  }
}

export default withRouter(Blog);
