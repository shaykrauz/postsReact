
import React, { Component } from 'react'
import UserService from './userService.js';

export default class UserProfile extends React.Component {
    constructor(){
        super();
        UserService.get();
    }
    render(){
        if(!this.props.user)
            return (
                <div className='user-profile'>
                    <h2>--</h2>
                    
                </div>
                );

        return(
            <div className='user-profile'>
                <p><span className="title"> Post Title: </span> {this.props.user.body} </p>

            </div>
        );
    }
}
