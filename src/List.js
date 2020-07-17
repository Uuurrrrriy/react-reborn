import React, {Component} from "react";
import {LoginContext} from "./UserInfoContext";

export class List extends Component{
    static contextType = LoginContext;
    state = {
        posts: []
    };

    componentDidMount() {
        if (this.context.isLoggedIn) {
            fetch(`https://jsonplaceholder.typicode.com/todos`)
                .then(response => response.json())
                .then(res => {
                    this.setState({
                        posts: res
                    })
                })
        }

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('called component did update');
        // prevProps - oldProps
        // this.props - new Props
        if (this.context.isLoggedIn && !this.state.posts.length ) {
            fetch(`https://jsonplaceholder.typicode.com/todos`)
                .then(response => response.json())
                .then(res => {
                    this.setState({
                        posts: res
                    })
                })
        }
        if (!this.context.isLoggedIn && this.state.posts.length ) {
            this.setState({
                posts: []
            })
        }
    }
    renderLogIn = () => {
        return (
            <div>
                <h1>
                    You are not logged in , please sign in
                </h1>
                <button onClick={this.context.signIn}>
                    login
                </button>
            </div>
        );
    };
    // toggle = () => this.setState({toggle: !this.state.toggle});


    render() {
        console.log(this.context);
        const {posts}=this.state;
        return (
            <div>
                <button onClick={this.context.signOut}> logout </button>
                {/*<button onClick={this.toggle}> toggle </button>*/}
                {
                    posts.length && posts.map(el => <div key={el.id}> {el.title} </div>) || this.renderLogIn()
                }
                {/*{*/}
                {/*    isLoggedIn &&*/}
                {/*        posts.map(el=><div key={el.id}>{el.title}</div>) ||*/}
                {/*        this.renderLogIn()*/}
                {/*}*/}
            </div>
        )
    }
}
