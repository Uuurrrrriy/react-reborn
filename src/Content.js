import React, {Component} from "react";
import {List} from "./List";

export class Content extends Component{
    // componentDidMount() {
    //     // test.forEach()
    // }

    render() {
        return (
            <div className={`content`}>
                <h1>
                    some title
                </h1>
                <List/>
            </div>
        )
    }
}
