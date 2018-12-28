import React, { Component } from 'react'


class Patient extends Component {
    render() {
        // =======================================================================================================
        // This is what is rendered in the react view, you can add on any of the propertys form the api call here
        // ie: {this.props.patient.nhsnum}
        // Look at PatientList.js for the full graphql query string to get information off
        return (
            <div>
                <div>
                    {this.props.patient.forname} {this.props.patient.surname} {this.props.patient.age}
                </div>
            </div>
        )
    }
}

export default Patient 