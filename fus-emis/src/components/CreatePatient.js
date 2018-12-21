import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'


const POST_MUTATION = gql
`mutation Post($title: String!, $forname: String!, $surname: String!, $age: Int!, $nhsnum: Int!) {
    post(title: $title,forname: $forname, surname: $surname, age: $age, nhsnum: $nhsnum) {
        id
        title
        forname
        surname
        age
        nhsnum
    }
}`

// This is rendering the form for the create a patient inputs for React.
// ===================================================================== 
class CreatePatient extends Component {
    state ={
        title: '',
        forname: '',
        surname: '',
        age: '', 
        nhsnum: '',
    }

    render () {
        const { title, forname, surname, age, nhsnum } = this.state
        return (
            <div>
                <div className="flex flex-column mt3">
                    <input
                        className="mb2"
                        value={title}
                        onChange={e => this.setState({ title: e.target.value })}
                        type="text"
                        placeholder="Title of the patient"
                    />
                    <input
                        className="mb2"
                        value={forname}
                        onChange={e => this.setState({ forname: e.target.value })}
                        type="text"
                        placeholder="Forname of the patient"
                    />
                    <input
                         className="mb2"
                         value={surname}
                         onChange={e => this.setState({ surname: e.target.value })}
                         type="text"
                         placeholder="Surname of the patient"
                    />
                      <input
                         className="mb2"
                         value={age}
                        // the parseFloat converts the string into an Int so it conforms to the DB rules i have set up in the schema
                         onChange={e => this.setState({age: parseFloat(e.target.value)} )}
                         type="text"
                         placeholder="Age of the patient"
                    />
                     <input
                         className="mb2"
                         value={nhsnum}
                         onChange={e => this.setState({nhsnum: parseFloat(e.target.value)} )}
                         type="int"
                         placeholder="Nhs Number for the patient"
                    />
                </div>
                    <Mutation mutation={POST_MUTATION}
                              variables={{ title, forname, surname, age, nhsnum}}
                              onCompleted={() => this.props.history.push('/')}
                              >
                              {post => <button onClick={post}>Submit</button>}
                    </Mutation>           
            </div>
        )
    }
}

export default CreatePatient