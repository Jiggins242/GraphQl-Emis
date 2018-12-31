import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import PatientList from './PatientList'
import CreatePatient from './CreatePatient'
import Header from './Header'
import Login from './Login'
import UserList from './UserList'
import Search from './Search'

class App extends Component {
  render () {
    return (
      <div className="center w85">
        <Header />
        <div className="ph3 pv1 background-gray">
          <Switch>
            <Route exact path="/" component={PatientList} />
            <Route exact path="/create" component={CreatePatient} /> 
            <Route exact path="/login" component={Login} />
            <Route exact path="/user" component={UserList} />
            <Route exact path="/search" component={Search} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
