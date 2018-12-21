import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import PatientList from './PatientList'
import CreatePatient from './CreatePatient';
import Header from './Header';

class App extends Component {
  render () {
    return (
      <div className="center w85">
        <Header />
        <div className="ph3 pv1 background-gray">
          <Switch>
            <Route exact path="/" component={PatientList} />
            <Route exact path="/create" component={CreatePatient} /> 
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
