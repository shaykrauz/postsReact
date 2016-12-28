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
import Names from './names.js';
import UserProfile from './user-profile.js';


export default class Posts extends React.Component {
    constructor(){
        super();
        this.state = {
            selectedUser: null
        };
    }

    selectUser(selectedUser){
        this.setState({selectedUser: selectedUser});
    }

    render(){
        return(
            <div>
                <Links />
                <h1 className="body">Posts</h1>
                <Names onUser={this.selectUser.bind(this)} />
                <UserProfile user={this.state.selectedUser} />
            </div>
        );
    }
}















// export default class Posts extends React.Component {
//     constructor(){
//         super();
//         UserService.get();
//     }
//     render(){
//         if(!this.props.user)
//             return (
//                 <div>
//                   <Links />
//                   <h1 className="body">Posts</h1>
//                     <div className='user-profile'>
//                         <p>Please select a user</p>
//                     </div>
//                 </div>
//                 );
//
//     return(
//       <div>
//           <Links />
//           <h1 className="body">Posts</h1>
//             <div className='user-profile'>
//                 <p><span class="title"> ID: </span> {this.props.user.id} </p>
//                 <p><span class="title"> Name: </span> {this.props.user.name} </p>
//                 <p><span class="title"> Username: </span> {this.props.user.username} </p>
//                 <p><span class="title"> City: </span> {this.props.user.address.city} </p>
//             </div>
//         </div>
//         );
//     }
// }
