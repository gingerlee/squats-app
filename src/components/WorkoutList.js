import React from 'react';
import PropTypes from 'prop-types';
import WorkoutSmall from './WorkoutSmall';
import {Row} from 'react-materialize';

function WorkoutList(props) {
  return (
    <div>
    <style jsx>{`
        .cards {
          max-height: 100%;
        }
        
        `}</style>

      <Row>
      <div className='cards'>
        {Object.keys(props.workoutList).map( workoutID => {
          const workout = props.workoutList[workoutID];
          return <WorkoutSmall
            image={workout.image}
            title={workout.title}
            day={workout.day}
            duration={workout.duration}
            level={workout.level}
            intensity={workout.intensity}
            url={workout.videoURL}
            key={workoutID} />
        })}
        </div>
      </Row>
    </div>
  );
}

WorkoutList.propTypes = {
  workoutList: PropTypes.object
};

export default WorkoutList;
