import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import Patient from './Patient'

const PatientInfo_Query = gql `
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
        const patientsToRender = [
            {
                id: '1',
                forname: 'Marge',
                surname: 'Simpson'
            },
            {
                id: '2',
                forname: 'Homer',
                surname: 'Simpson'
            },
        ]

        return (
            <Query query={PatientInfo_Query}>
                {() => patientsToRender.map(patient => <Patient key={patient.id} patient={patient}/>)}
            </Query>
        )
    }
}

export default PatientList