import React from 'react';
import UserService from './userService.js';

export default class Names extends React.Component {
    constructor(){
        super();
        this.state = { title: [] };
        this.getNames();
    }
    getNames(){
        let names = [];
        UserService.get()
            .then((title)=> {
                this.setState({title: title});
            });
    }

    select(selectedUser){
        this.props.onUser(selectedUser);
    }

    render(){
        return(
            <ul className="user-list">
                <h2>Title</h2>
                {this.state.title.map((user, i) => {
                    return <h4 onClick={()=> this.select(user)} key={i}>{user.title}</h4>
                })}
            </ul>
        );
    }
}
