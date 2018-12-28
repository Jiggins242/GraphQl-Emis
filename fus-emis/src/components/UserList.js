import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { AUTH_TOKEN } from '../constants'

import User from './User'

const USERINFO_QUERY = gql 
`
{
    userInfo{
        id

        forname
        surname

    }
}`

class UserList extends Component {
    render() {
        const authToken = localStorage.getItem(AUTH_TOKEN)
        return (
            // ===============================================================================>
            // If the user is logged in and has the "authtoken" we show the patients to render
            <div>
                {authToken ? (
                <Query query={USERINFO_QUERY}>
                {({ loading, error, data }) => {
                    if (loading) return <div>Fetching</div>
                    if (error) return <div>Error</div>

                    const usersToRender = data.userInfo

                    return (
                        <div>
                            {usersToRender.map(user => <User key={user.userName} user={user} />)}
                        </div>
                    )
                }}
                </Query> 
                ) : (
                // ===============================================================================================>
                // However if no user is logged in we dont show the patients we present a message instead top them
                    <div>
                        <h4>
                        Login to use
                        </h4>
                    </div>
                )}
            </div>
        )
    }
}

export default UserList