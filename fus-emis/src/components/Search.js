import React, { Component } from 'react'
import { withApollo } from 'react-apollo'
import gql from 'graphql-tag'
import Patient from './Patient'
import { AUTH_TOKEN } from '../constants'

const PATIENT_SEARCH_QUERY = gql 
`
query  PatientSearchQuery($filter: String!) {
    patient(filter: $filter) {
        patients {
            id
            title
            forname
            surname
            age
            nhsnum
        }
    }
}
`

class Search extends Component {

    state = {
        patient: [],
        filter: ''
    }

    render() {
        const authToken = localStorage.getItem(AUTH_TOKEN)
        return (
            <div>
                {authToken ? (
                <div>
                    <div>
                        <input
                            type='text'
                            placeholder="Does not work LOL"
                            onChange={e => this.setState({ filter: e.target.value })}
                        />
                        <button
                            onClick={() => this._executeSearch()}
                            >Search
                        </button>
                    </div>
                    {this.state.patient.map((patient, index) => (
                        <Patient key={ patient.id } patient={patient} index={index} />
                    ))}
                </div>
                 ) : (
                    // ===============================================================================================>
                    // However if no user is logged in we dont show the search we present a message instead top them
                    <div>
                        <h4>
                         Login to use
                        </h4>
                    </div>
                )}
            </div>
        )
    }

    _executeSearch = async () => {
        const { filter } = this.state
        const result = await this.props.client.query({
            query:PATIENT_SEARCH_QUERY,
            variables: { filter },
        })
        const patients = result.data.patientinfo.patients
        this.setState({ patients })
    }
}

export default withApollo(Search)