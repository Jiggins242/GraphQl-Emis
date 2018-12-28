import React, { Component } from 'react'


class User extends Component {
    render() {
        return (
            <div>
                <div>
                    {this.props.user.forname} {this.props.user.surname}
                </div>
            </div>
        )
    }
}

export default User