import React, { Component } from 'react'
import { AUTH_TOKEN } from '../constants'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

const LOGIN_MUTATION =gql
`
mutation LoginMutation($userName: String!, $password: String!) {
    login(userName: $userName, password: $password){
        token
        user {
            id
            forname
            surname
        }
    }
}
`

class Login extends Component {
    state = {
       userName: '',
       password: '' 
    }

    render () {
        const { userName, password } = this.state

        return (
            <div>
                <h4 className="mv3"> {'Login'}</h4>
                <div 
                    className="flex flex-column">
                    <input
                        value={userName}
                        onChange={e => this.setState({ userName: e.target.value})}
                        type="text"
                        placeholder="Username"
                    />
                    <input
                        value={password}
                        onChange={e => this.setState({ password: e.target.value})}
                        type="text"
                        placeholder="Password"
                    />
                </div>
                <div
                    className="flex mt3">  
                        <Mutation
                            mutation={LOGIN_MUTATION}
                            variables={{userName, password}}
                            onCompleted={data => this._confirm(data)}
                        >  
                            {mutation => (
                                <div
                                    className="pointer button"
                                    onClick={mutation}>
                                    {'Login'}
                                </div>
                            )}
                        </Mutation>
                </div>
            </div>
        )
    }

    _confirm = async data => {
        const { token } = this.state.login = data.login
        this._saveUserData(token)
        this.props.history.push('/')
    }

    _saveUserData = token => {
        localStorage.setItem(AUTH_TOKEN, token)
    }
}

export default Login