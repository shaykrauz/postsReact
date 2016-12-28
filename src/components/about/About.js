import React, { Component } from 'react'
import {
	Router,
	Route,
	Link,
	IndexRoute,
	browserHistory,
	hashHistory
} from 'react-router'
import Links from '../Links'

export default class About extends Component {

  render() {
    return (
      <div>
        <Links />
        <h1 className="body">About</h1>
        <p>This is the About This is the About This is the About
        This is the About This is the About This is the About
        This is the About This is the About This is the About
        This is the About This is the About This is the About
        </p>
      </div>
    )
  }
};
