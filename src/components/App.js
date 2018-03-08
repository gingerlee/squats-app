import React, { Component } from 'react';
import logo from './../assets/images/logo.svg';
import Error404 from './Error404';
import Welcome from './Welcome';
import ChallengeHome from './ChallengeHome';
import { Switch, Route, Link } from 'react-router-dom';
import {usersByIdList, workoutsByIdList}  from './../constants/initialState';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWorkoutId: 1,
      workoutsById: workoutsByIdList,
      usersById: usersByIdList,
    };
  }



  render() {
    return (
      <div className="App">
      <Switch>
        <Route exact path='/' render={()=> <Welcome /> } />
        <Route path='/challenge' render={()=> <ChallengeHome
            workoutList={this.state.workoutsById}
            userList={this.state.usersById}
           /> } />
         <Route component={Error404} />
      </Switch>
    </div>
    );
  }
}

export default App;
