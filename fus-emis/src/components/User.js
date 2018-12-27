import React, { Component } from 'react'

class User extends Component {
    render() {
        // This is what is rendered in the react view, you can add on any of the propertys form the api call here
        // ie: {this.props.patient.nhsnum}
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