import React from 'react';
import './styles/ChallengeHome.css';
import PropTypes from 'prop-types';
import SiteNav from './SiteNav';
// import SiteFooter from './SiteFooter';
import WorkoutList from './WorkoutList';
import TeamList from './TeamList';
import { ChallengeHomeImage }  from './../assets/images/ChallengeHomeImage.jpg';

function ChallengeHome(props){
  return(
    <div>
      <SiteNav/>
      <div className='homeImage'></div>
      <div className='challenge-header center'>
        <h3>21 Days of Squats!</h3>
        <p className='flow-text'>A curated list of 21 workouts to help you stay in shape</p>
      </div>
      <hr/>
      <h4 className='center'>Workout List</h4>
      <div className='workout-list'>
        <WorkoutList workoutList={props.workoutList} />
      </div>
      <h4 className='center'>Team List</h4>
      <div className='team-list'>
        <TeamList userList={props.userList} />
      </div>
    </div>
  );
}

ChallengeHome.propTypes = {
  workoutList: PropTypes.object,
  userList: PropTypes.object
};

export default ChallengeHome;


// <SiteFooter/>
