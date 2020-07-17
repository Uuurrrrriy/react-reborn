import React, {Component, createContext} from 'react';
import './App.css';
import {Content} from "./Content";
import {Aside} from "./Aside";
import {UserInfoContext} from "./UserInfoContext";
import {ErrorBoundary} from "./ErrorBoundary";

class MainComponent extends Component{
    render() {
        return (
            <div className={`main-wrapper`}>
                <Aside/>
                <ErrorBoundary>
                    <Content />
                </ErrorBoundary>

            </div>
        )
    }
}


class App extends Component{
    render() {
     return (
        <div>
            <UserInfoContext>
                <MainComponent />
            </UserInfoContext>

        </div>
    );
  }
}

export default App;
