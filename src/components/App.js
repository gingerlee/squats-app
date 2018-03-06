import React, { Component } from 'react';
import logo from './../assets/images/logo.svg';
import './styles/App.css';
import Welcome from './Welcome';
import ChallengeHome from './ChallengeHome';
import { Switch, Route, Link } from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workoutsById: {
        1: {
          title: 'Jump!',
          day: 'Day 1',
          duration: '30min',
          level: 'Intermediate',
          intensity: 'Medium',
          image: '',
          videoURL: 'https://www.youtube.com/watch?v=E4tiWhsQhQg&list=PL5lPziO_t_VgdnI02Bi4XDlJTphcuX6dW',
          users: []
        },
        2: {
          title: 'Step up to your goals',
          day: 'Day 2',
          duration: '40min',
          level: 'Advanced',
          intensity: 'Hard',
          image: '',
          videoURL: 'https://www.youtube.com/watch?v=Ea6o73uwVYM',
          users: []
        },
        3: {
          title: 'Abs',
          day: 'Day 3',
          duration: '30min',
          level: 'Beginner',
          intensity: 'Low',
          image: '',
          videoURL: 'https://www.youtube.com/watch?v=EkWBqgXUXDY',
          users: []
        },
      },
      usersById: {
        1: {
          name: 'Ginger',
          title: 'Team Lead',
          image: 'https://avatars0.githubusercontent.com/u/7268556?s=460&v=4',
          completedWorkouts: []
        },
        2: {
          name: 'Cat',
          title: 'Team Member',
          image: 'https://avatars0.githubusercontent.com/u/28492736?s=460&v=4',
          completedWorkouts: []
        }
      },
    };
  }

  render() {
    return (
      <div className="App">
      <Switch>

        <Route exact path='/' render={()=> <Welcome /> } />
        <Route path='/challenge' render={()=> <ChallengeHome /> } />
      </Switch>
    </div>
    );
  }
}

export default App;
