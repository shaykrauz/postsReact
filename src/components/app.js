import React, { Component } from 'react';
import {
	Router,
	Route,
	Link,
	IndexRoute,
	browserHistory,
	hashHistory
} from 'react-router';

import Home from './home/Home.js';
import About from './about/About.js';
import Posts from './posts/Posts.js';

export default class App extends Component {

  render() {
    return (
      <Router history={hashHistory}>
         <Route path="/" component={Home}></Route>
         <Route path="/about" component={About}></Route>
         <Route path="/posts" component={Posts}></Route>
      </Router>
    )
  }
};
