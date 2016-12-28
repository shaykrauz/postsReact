import React, { Component } from 'react'
import {
	Router,
	Route,
	Link,
	IndexRoute,
	browserHistory,
	hashHistory,
	Redirect,
	withRouter
} from 'react-router'


// 1) - basic starter
//export default class App extends Component {

//   render() {
//     return (
//       <div>
// 		 <h1>Hello Router</h1>
// 	  </div>
//     );
//   }
// }


// 2) - basic routing
// const Home = () => <div><h1>Home</h1></div>
// const About = () => <div><h1>About</h1></div>
// const Contact = () => <div><h1>Contact</h1></div>
//
// export default class App extends Component {
//
//   render() {
//     return (
//       <Router history={hashHistory}>
// 		 <Route path="/" component={Home}></Route>
// 		 <Route path="/about" component={About}></Route>
// 		 <Route path="/contact" component={Contact}></Route>
// 	  </Router>
//     )
//   }
// }

// 3) - histories
// const Home = () => <div><h1>Home</h1><Links /></div>
// const About = () => <div><h1>About</h1><Links /></div>
// const Contact = () => <div><h1>Contact</h1><Links /></div>
// const NoMatch = () => <div><h1>404 - No such route...</h1></div>
//
// const Links = () =>
// 	<nav>
// 		<div><Link to="/">Home</Link></div>
// 		<div><Link to="/about">About</Link></div>
// 		<div><Link to="/contact">Contact</Link></div>
// 	</nav>
//
// export default class App extends Component {
//
//   render() {  //browserHistory
//     return (
//       <Router history={hashHistory}>
// 		 <Route path="/" component={Home}></Route>
// 		 <Route path="/about" component={About}></Route>
// 		 <Route path="/contact" component={Contact}></Route>
// 		 <Route path="*" component={NoMatch}/>
// 	  </Router>
//     )
//   }
// }

// 4) - active style, active class name
/*const Home = () => <div><h1>Home</h1><Links /></div>
const About = () => <div><h1>About</h1><Links /></div>
const Contact = () => <div><h1>Contact</h1><Links /></div>

const Links = () =>
	<nav>
		<div><Link activeStyle={{color:'red'}} to="/">Home</Link></div>
		<div><Link activeStyle={{color:'red'}} to="/about">About</Link></div>
		<div><Link activeClassName="active-link" to="/contact">Contact</Link></div>
	</nav>

export default class App extends Component {

  render() {
    return (
      <Router history={hashHistory}>
		 <Route path="/" component={Home}></Route>
		 <Route path="/about" component={About}></Route>
		 <Route path="/contact" component={Contact}></Route>
	  </Router>
    )
  }
}*/

// 5) - Nested routes
const Home = (props) => <div className='home'><h1>Home</h1><Links />{props.children}</div>
const About = (props) => <div className='about'><h1>About</h1>{props.children}</div>
const Contact = () => <div className='contact'><h1>Contact</h1></div>

const Links = () =>
	<nav>
		<Link to="/" className="link">Home</Link>
		<Link to="/about" className="link">About</Link>
		<Link to="/about/contact" className="link">Contact</Link>
	</nav>

export default class App extends Component {

  render() {
    return (
      <Router history={hashHistory}>
		 <Route path="/" component={Home}>
  			<Route path="about" component={About}>
  				<Route path="contact" component={Contact}></Route>
  			</Route>
		 </Route>
	  </Router>
    )
  }
}

// 6) - IndexRoute
// const Outer = (props) => <div className='home'><h1>Our Site</h1><Links />{props.children}</div>
// const About = () => <div className='about'><h1>About</h1></div>
// const Contact = () => <div className='contact'><h1>Contact</h1></div>
//
// const Links = () =>
// 	<nav>
// 		<Link to="/" className="link">Home</Link>
// 		<Link to="contact" className="link">Contact</Link>
// 	</nav>
//
// export default class App extends Component {
//
//   render() {
//     return (
//       <Router history={hashHistory}>
// 		 <Route path="/" component={Outer}>
// 			<IndexRoute component={About}></IndexRoute>
// 			<Route path="contact" component={Contact}></Route>
// 		 </Route>
// 	  </Router>
//   )
//   }
// }

// 7) - Route Parameters

// const Message = (props) => <div className='message'><h1>{props.params.message}</h1><Links/></div>
//
// const Links = () =>
// 	<nav>
// 		<Link to="/" className="link">Hello</Link>
// 		<Link to="/Hi" className="link">Hi</Link>
// 		<Link to="/Yo" className="link">Yo</Link>
// 	</nav>
//
// export default class App extends Component {
//
//   render() {
//     return (
//       <Router history={hashHistory}>
// 		 <Route path="/(:message)" component={Message}></Route>
// 	  </Router>
//     )
//   }
// }


// 8) - Named Components
//      We can render multiple components in a single route using ‘Named Components’
// const Home = () => <div className="home"><h1>Home</h1></div>
// const HomeBody = () => <div className='body'>this is the home body</div>
// const Other = () => <div className="other"><h1>Other</h1></div>
// const OtherBody = () => <div className='other-body'>Other body is in here</div>
//
// const Container = (props) =>
//   <div>{props.header}{props.body}<Links /></div>
//
// const Links = () =>
//   <nav>
//     <Link to="/" className="link">Home</Link>
//     <Link to="/other" className="link">Other</Link>
//   </nav>
//
// export default class App extends Component {
//   render(){
//     return (
//       <Router history={ hashHistory }>
//         <Route path="/" component={Container}>
//           <IndexRoute components={ { header: Home, body: HomeBody } }></IndexRoute>
//           <Route path="/other" components={ { header: Other, body: OtherBody} }></Route>
//         </Route>
//       </Router>
//     )
//   }
// }

// 9)
// React-router allows us to pass in query strings as props

// const Page = (props)=>
// 	<div><h1>{props.location.query.message || 'Hello'}</h1><Links /></div>
//
// const Links = () =>
//   <nav>
//     <Link to={ {
// 				  pathname: '/',
// 				  query: {
// 					message: 'query string msg'
// 				  }
// 				} }>link</Link>
//   </nav>
//
// export default class App extends Component {
//   render(){
//     return (
//       <Router history={ hashHistory }>
//         <Route path="/" component={Page}></Route>
//       </Router>
//     )
//   }
// }

// 10) - Redirects
/*const Home = () => <div className="home"><h1>Home</h1><Links /></div>
const About = () =>  <div className='about'><h1>About Us</h1><Links /></div>
const Contact = () => <div className='contact'><h1>Contact</h1><Links /></div>

const Links = () =>
  <nav>
    <Link to="/" className="link">Home</Link>
    <Link to="about-us" className="link">About Us</Link>
    <Link to="about" className="link">About</Link>
    <Link to="contact" className="link">Contact</Link>
  </nav>

export default class App extends Component {
  render(){
    return (
      <Router history={ hashHistory }>
		  <Route path="/" component={ Home }></Route>
		  <Route path="/about-us" component={About}></Route>
		  <Route path="/contact" component={Contact}></Route>
		  <Redirect from='/about' to='/about-us'></Redirect>
      </Router>
    )
  }
}*/

// 11) - use .setRouteLeaveHook()
//       to capture the timing when the user is about to leave a certain route
/*class Home extends Component{

  componentDidMount(){
	this.props.router.setRouteLeaveHook( this.props.route, this.routerWillLeave )
  }

  routerWillLeave( nextLocation ){
	return `leaving home for ${nextLocation.pathname}`
  }

  render(){
	return <div className="home"><h1>Home</h1><Links /></div>;
  }

}

const About = () => <div className="about"><h1>About</h1><Links /></div>;
const Links = () => {
  return (
    <nav>
      <Link to="/" className="link">Home</Link>
      <Link to="about" className="link">About</Link>
    </nav>
  )
};

const App = () => { // notice the withRouter() wrapper...
  return (
    <Router history={ hashHistory }>
      <Route path="/" component={ withRouter(Home) }></Route>
      <Route path="/about" component={About}></Route>
    </Router>
  )
}

export default App*/


// 12) - routing programmatically
// 		 browserHistory.push('/some/path')
