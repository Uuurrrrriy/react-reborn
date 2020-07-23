import React, {Component} from 'react';
import {BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'
import './App.css';

class UserLists extends React.Component{

    render() {
        console.log(this.props);
        const {users} = this.props;
        return (
            <ul>
                {
                    !users.length ? (<div> loading ... </div>) : users.map(el => (
                        <li>
                            <NavLink
                                exact
                                to={`/details/${el.id}`}
                                activeStyle={{background: 'red'}}>
                               Info about {el.name}
                            </NavLink>
                        </li>)
                    )
                }
            </ul>
        )
    }
}

// class Details extends React.Component{
//
//     render() {
//     return (
//         <div> Details Page </div>
//     )
// }
// }

// class SuperDetails extends React.Component{
//
//     render() {
//         console.log(this.props);
//         return (
//             <div> SuperDetails  Page </div>
//         )
//     }
// }

// class NavBar extends React.Component{
//
//     render() {
//         return (
//             <div>
//                 <ul>
//                     C
//
//                 </ul>
//                 <ul>
//                     <NavLink exact to='/details' activeStyle={{background: 'red'}}>
//                         Go to Details page
//                     </NavLink>
//
//                 </ul>
//             </div>
//         )
//     }
// }

// localhost: 3000/ -> main
// localhost: 3000/details -> details


class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        const { match: { params: {id} } } = this.props;
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then(res => res.json())
            .then(posts => this.setState({
                posts
            }))
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { match: { params: {id} } } = this.props;
        if (prevProps.match.params.id !== this.props.match.params.id) {
            fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
                .then(res => res.json())
                .then(posts => this.setState({
                    posts
                }))
        }
    }

    render() {
        const {posts} =this.state;
        return (
            <div>
                {
                    posts.map(el => <div> {el.title} </div>)
                }
            </div>
        );
    }
}


class App extends Component{
    state = {
        users: []
    };

    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(res=> res.json())
            .then(users => {
                console.log(users);
                this.setState({users})
            })
    }

    render() {
        return (
            <BrowserRouter>
                <div className='App'>
                    <UserLists users={this.state.users}/>
                    {/*<NavBar/>*/}
                    <Switch>
                        <Route exact path='/details' render={()=> <div> Pick user to fetch data about him </div>} />
                        <Route exact path='/details/:id' render={(routerProps) => <Details {...routerProps} />}  />
                        {/*<Route exact path='/'>*/}
                        {/*    <Main/>*/}
                        {/*</Route>*/}
                        {/*<Route exact path='/'>*/}
                        {/*    {*/}
                        {/*        (routerProps) => <Main {...routerProps}/>*/}
                        {/*    }*/}
                        {/*</Route>*/}
                        {/*<Route exact path='/' render={(routerProps)=> <Main {...routerProps}/>}/>*/}
                        {/*<Route exact path='/details' component={Details}/>*/}
                        {/*<Route exact path='/details/:id' component={SuperDetails}/>*/}
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }


}

export default App;
