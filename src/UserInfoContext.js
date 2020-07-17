import React, {Component, createContext} from "react";
export const LoginContext = createContext('');

export class UserInfoContext extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            // posts: []
        }
    }

    // componentDidMount() {
    //     fetch(`https://jsonplaceholder.typicode.com/todos`)
    //         .then(response => response.json())
    //         .then(res => {
    //             this.setState({
    //                 posts: res
    //             })
    //         })
    // }

    signIn = () => this.setState({isLoggedIn: true});
    signOut = () => this.setState({isLoggedIn: false});

    render() {
        const {children} = this.props;
        return (
            <LoginContext.Provider value={{
                isLoggedIn: this.state.isLoggedIn,
                // posts: this.state.posts,
                signIn: this.signIn,
                signOut: this.signOut
            }}>
                {children}
            </LoginContext.Provider>
        )
    }
}
