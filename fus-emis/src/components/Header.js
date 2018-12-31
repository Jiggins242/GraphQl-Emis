import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { AUTH_TOKEN } from '../constants'

class Header extends Component {
    render() {
        const authToken = localStorage.getItem(AUTH_TOKEN)
        return (
            // ======================================================================================================================================================
            // If there is a user logged in and a "authToken" provided then the header will show the option to "Create new patient" as well as the option to "logout"
            // If no user is logged in so no "authToken" the option to create new patient wont be rendered and a "login" option will be shown instead of the logout 
            <div className="flex pal justify-between nowrap">
                <div className="flex flex-fixed black">
                    <div className="fw8 mr3"> Patient Details</div>
                    <Link to="/" className="mli no-underline black">
                        Home
                    </Link>
                    <div className="mli">|</div>
                    <Link to="/search" className="mli no-underline black">
                        Search
                    </Link>
                    {authToken && (
                        <div className="flex ">
                            <div className="mli">|</div>
                            <Link to="/create" className="mli no-underline black">
                                Create New Patient
                            </Link>
                        </div>
                    )}
                </div>
                <div className="flex flex-fixed">
                        {authToken ? (
                            <div className="mli pointer black"
                                 onClick={() => {
                                     localStorage.removeItem(AUTH_TOKEN)
                                     this.props.history.push('/')
                                 }}
                            >
                                Logout
                            </div>
                        ) : (
                            <Link to="/login" className="mli no-underline black">
                                Login
                            </Link>
                        )}
                </div>
            </div>
        )
    }
}

export default withRouter(Header)