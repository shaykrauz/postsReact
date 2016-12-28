import React, { Component } from 'react'
import {
	Router,
	Route,
	Link,
	IndexRoute,
	browserHistory,
	hashHistory
} from 'react-router'

export default class Links extends Component {

  render() {
    return (
      <nav>
        <ul className="nav">
      		<li><Link activeClassName="active-link" to="/">Home</Link></li>
      		<li><Link activeClassName="active-link" to="/about">About</Link></li>
      		<li><Link activeClassName="active-link" to="/posts">Posts</Link></li>
        </ul>
    	</nav>
    )
  }
};
