import React, { Component } from 'react';
import logo from './../assets/images/logo.svg';
import './styles/App.css';
import Error404 from './Error404';
import Welcome from './Welcome';
import ChallengeHome from './ChallengeHome';
import { Switch, Route, Link } from 'react-router-dom';
import MissPiggy from './../assets/images/miss-piggy-workout1.jpg'
;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWorkoutId: 1,
      workoutsById: {
        1: {
          image: MissPiggy,
          title: 'Jump!',
          day: 'Day 1',
          duration: '30min',
          level: 'Intermediate',
          intensity: 'Medium',
          videoURL: 'https://www.youtube.com/watch?v=E4tiWhsQhQg&list=PL5lPziO_t_VgdnI02Bi4XDlJTphcuX6dW',
          users: []
        },
        2: {
          title: 'Step it up',
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
        4: {
          title: 'Big Little Thighs',
          day: 'Day 4',
          duration: '27min',
          level: 'Intermediate',
          intensity: 'Medium',
          image: '',
          videoURL: 'https://www.youtube.com/watch?v=EkWBqgXUXDY',
          users: []
        },
        5: {
          title: '21 Jump Cheek',
          day: 'Day 5',
          duration: '30min',
          level: 'Beginner',
          intensity: 'Low',
          image: '',
          videoURL: 'https://www.youtube.com/watch?v=EkWBqgXUXDY',
          users: []
        },
        6: {
          title: 'Sweat it out',
          day: 'Day 6',
          duration: '35min',
          level: 'Advanced',
          intensity: 'High',
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
        },
        3: {
          name: 'Lena',
          title: 'Team Member',
          image: 'https://avatars2.githubusercontent.com/u/32624171?s=460&v=4',
          completedWorkouts: []
        },
        4: {
          name: 'Jack',
          title: 'Excutive Hobo',
          image: 'https://avatars0.githubusercontent.com/u/26096986?s=460&v=4',
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
