import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { AUTH_TOKEN } from '../constants'

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
        const authToken = localStorage.getItem(AUTH_TOKEN)
        return (
            <div>
                {authToken ? (
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
                ) : (
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

export default PatientList