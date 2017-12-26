import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import "./LoginForm.css";

import { firebaseApp, provider } from '../../Config/Config';

class LoginForm extends Component{
    constructor(props){
        super(props);
        this.authWithGoogle =this.authWithGoogle.bind(this);
        this.state = {
            actionUrl: props.actionUrl
        };

    }

    authWithGoogle(){
        firebaseApp.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            //var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            this.setState({redirect:true, user: user, actionUrl: this.state.actionUrl});
          
          }).catch(function(error) {
            console.table(error);
          });
    }

    render(){
        if (this.state.redirect){
            return (
                <Redirect to ={this.state.actionUrl} push />
            )
        }else{
            return (
                    <div className="LoginForm">
                        <button className="btn btn-primary" onClick={this.authWithGoogle}>
                            <i className="fab fa-Google"></i>
                            Sign In with Google
                        </button>
                    </div>
                );
        }
    }
};

export default LoginForm;