import React from 'react';
import './styles/ChallengeHome.css';
import PropTypes from 'prop-types';
import SiteNav from './SiteNav';
// import SiteFooter from './SiteFooter';
import WorkoutList from './WorkoutList';
import TeamList from './TeamList';
import { ChallengeHomeImage }  from './../assets/images/ChallengeHomeImage.jpg';
import {Parallax} from 'react-materialize';

function ChallengeHome(props){
  return(
    <div>
      <SiteNav/>
      <div className='homeImage'></div>
      <div className='challenge-header center'>
        <h3>21 Days of Sweat!</h3>
        <p className='flow-text'>A curated list of 21 workouts with friends</p>
      </div>
      <hr/>
      <h4 className='center'>Workout List</h4>
      <div className='workout-list'>
        <WorkoutList workoutList={props.workoutList} />
      </div>
      <div>
        <Parallax imageSrc='https://images.unsplash.com/photo-1514512364185-4c2b0985be01?ixlib=rb-0.3.5&s=51f7db12282141137eb511ea1ea148a7&auto=format&fit=crop&w=1351&q=80'/>
        <div className='section white'>
          <div className='row container'>
            <h2 className='header'>Now that's squat's up</h2>
            <p className='grey-text text-darken-3 lighten-3'>If you can workout with your friends, you are accountable for more than yourself, you help make a team. Health is a community effort.</p>
          </div>
        </div>
        <Parallax imageSrc='https://images.unsplash.com/photo-1484981184820-2e84ea0af397?ixlib=rb-0.3.5&s=7011f942bda82926da392347b7b178cd&auto=format&fit=crop&w=1350&q=80'/>
      </div>
      <hr/>
      <h4 className='center'>Team List</h4>
      <div className='team-list'>
        <TeamList userList={props.userList} />
      </div>
    </div>
  );
}
// <SiteFooter/>

ChallengeHome.propTypes = {
  workoutList: PropTypes.object,
  userList: PropTypes.object
};

export default ChallengeHome;
