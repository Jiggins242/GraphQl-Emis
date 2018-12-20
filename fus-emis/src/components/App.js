import React, { Component } from 'react'

import PatientList from './PatientList'
import CreatePatient from './CreatePatient';

class App extends Component {
  render () {
    //return <PatientList/>
    return <CreatePatient />
  }
}

export default App;
