import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import Patient from './Patient'

const PATIENTINFO_QUERY = gql 
`
{
    patientInfo{
        id
        title
        forname
        surname
        age
        nhsnum
    }
}`

class PatientList extends Component {
    render() {
        return (
            <Query query={PATIENTINFO_QUERY}>
            {({ loading, error, data }) => {
                if (loading) return <div>Fetching</div>
                if (error) return <div>Error</div>

                const patientsToRender = data.patientInfo

                return (
                    <div>
                         {patientsToRender.map(patient => <Patient key={patient.id} patient={patient} />)}
                    </div>
                )
            }}
            </Query>
        )
    }
}

export default PatientList