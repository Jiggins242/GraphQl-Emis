import React, { Component } from 'react'
import {AUTH_TOKEN } from '../constants'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const SIGNUP_MUTATION = gql
`
mutation SignupMutation($email: String!, $password: String!, $username: String!) {
    signup(email: $email, password: $password, username: $username) {
        token
    }
}
`

const LOGIN_MUTATION = gql
`
mutation LoginMutation($username: String!, $passsword: String!) {
    login(username: $username, password: $password) {
        token
    }

}

`

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
                            value={email}
                            onChange={e => this.setState({ email: e.target.value})}
                            type="text"
                            placeholder="Your name"
                        />
                    )}
                        <input
                            value={username}
                            onChange={e => this.setState({ username: e.target.value})}
                            type="text"
                            placeholder="Your Username"
                        />
                        <input
                            value={password}
                            onChange={e => this.setState({ password: e.target.value})}
                            type="text"
                            placeholder="Your Password"
                        />  
                </div>
                <div className="flex mt3">
                    <Mutation
                        mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION}
                        variables={{ username, password}}
                        onCompleted={data => this._confirm(data)}
                        >
                        {mutation => (
                            <div className="pointer mr2 button" onClick={mutation}>
                                {login ? 'login' : 'create account'}
                            </div>
                        )}
                    </Mutation>
                    <div 
                        className="pointer button" 
                        onClick={() => this.setState({ login: !login})}
                        >
                            {login
                                ? 'You need to create an account'
                                : 'You already have an account'}
                    </div>
                </div>
            </div>                   
        )
    }

    _confirm = async data => {
        const { token } = this.state.login ? data.login : data.signup
        this._saveUserData(token)
        this.props.history.push('/')
    }

    _saveUserData = token => {
        localStorage.setItem(AUTH_TOKEN, token)
    }
}

export default Login 