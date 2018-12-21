import React, { Component } from 'react'
import {AUTH_TOKEN } from '../constants'

class Login extends Component {
    state = {
        login: true, // switch between Login and Signup
        email: '',
        username: '',
        password: ''
    }
// *******************************************************************
// This will check the username given to see if that user exsist
// If they do, it will render out the email form and password to allow to login
// If not they will be propmted to sign up
    render () {
        const { login, email, username, password} = this.state
        return (
            <div>
                <h4 className="mv3">{login ? 'Login' : 'Sign Up'}</h4>
                <div className="flex flex-column">
                    {!login && (
                        <input
                            value={username}
                            onChange={e => this.setState({ username: e.target.value})}
                            type="text"
                            placeholder="Your User Name"
                        />
                    )}
                        <input
                            value={email}
                            onChange={e => this.setState({ email: e.target.value})}
                            type="text"
                            placeholder="Your email address"
                        />
                        <input
                            value={password}
                            onChange={e => this.setState({ password: e.target.value})}
                            type="text"
                            placeholder="Your Password"
                        />  
                </div>
                <div className="flex mt3">
                    <div 
                        className="pointer mr2 button" 
                        onClick={() => this._confirm()}>
                            {login
                                ? 'login' : 'create account'}
                    </div> 
                    <div 
                        className="pointer button" 
                        onClick={() => this.setState({ login: !login})}>
                            {login
                                ? 'You need to create an account'
                                : 'You already have an account'}
                    </div>
                </div>
            </div>                   
        )
    }

    _confirm = async () => {
        // add in code later 
    }

    _saveUserData = token => {
        localStorage.setItem(AUTH_TOKEN, token)
    }
}

export default Login 