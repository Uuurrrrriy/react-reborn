import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import React from "react";

const UserPanel = ({isLoggedIn,logIn}) => {
    return (
        <div>
            <h1>
                You are {isLoggedIn ? '' : 'not'} logged in
            </h1>
            { !isLoggedIn && (
                <button onClick={logIn}>
                    log in
                </button>)
            }
        </div>
    )
};


const mapStateToProps1 = (state) => {
    // console.log(state);
    return {
        isLoggedIn: state.userReducer.isLoggedIn
    }
};

const mapDispatchToProps1 = (dispatch) => {
    return bindActionCreators({
        logIn: () => ({type:'LOG_IN'})
    },dispatch)
};


export const UserPanelWithRedux = connect(mapStateToProps1,mapDispatchToProps1)(UserPanel);
