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

export default class Home extends Component {

  render() {
    return (
      <div>
        <Links />
        <h1 className="body">Home</h1>
        <p>This is the Home This is the Home This is the Home
        This is the Home This is the Home This is the Home
        This is the Home This is the Home This is the Home
        This is the Home This is the Home This is the Home
        </p>
      </div>
    )
  }
};
