import React, { Component } from 'react'

class Patient extends Component {
    render() {
        return (
            <div>
                <div>
                    {this.props.patient.forname} ({this.props.patient.surname})
                </div>
            </div>
        )
    }
}

export default Patient