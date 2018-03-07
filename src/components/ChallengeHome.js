import React from 'react';
import './styles/ChallengeHome.css';
// import PropTypes from 'prop-types';
import SiteNav from './SiteNav';
// import Footer from './Footer';

function ChallengeHome(){
  return(
    <div>

      <div className='challenge-header center'>
        <h3>21 Days of Squats!</h3>
        <p className='flow-text'>A curated list of 21 workouts to help you stay in shape</p>
      </div>

    </div>
  );
}

// ChallengeHome.propTypes = {
//   workoutList: PropTypes.object,
//   userList: PropTypes.object
// };

export default ChallengeHome;


// <div className='workout-list'>
//   <WorkoutList workoutList={props.workoutList} />
// </div>
//
// <div className='team-list'>
//   <TeamList userList={props.userList} />
// </div>
