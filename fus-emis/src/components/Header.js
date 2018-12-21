import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

class Header extends Component {
    render() {
        return (
            <div className="flex pal justify-between nowrap">
                <div className="flex flex-fixed black">
                    <div className="fw8 mr3"> Patient Details</div>
                    <Link to="/" className="mli no-underline black">
                        Home
                    </Link>
                    <div className="mli">|</div>
                    <Link to="/create" className="nli no-underline black">
                        Create New Patient
                    </Link>
                </div>
            </div>
        )
    }
}

export default withRouter(Header)