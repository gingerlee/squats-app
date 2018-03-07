import React from 'react';
import PropTypes from 'prop-types';
import WorkoutSmall from './WorkoutSmall';

function WorkoutList(props) {
  return (
    <div>

      <div className='cards'>
        {props.workoutList.map((workout, index) =>
          <WorkoutSmall
            title={workout.title}
            day={workout.day}
            duration={workout.duration}
            level={workout.level}
            intensity={workout.intensity}
            image={workout.imgae}
            key={index} />
        )}
      </div>
      <style jsx>{`
          .cards {
          display: grid;
          grid-gap: 30px;
          grid-template-columns: repeat(2, 1fr);
          margin: 0 3em;
        }
      `}</style>
    </div>
  );
}

WorkoutList.propTypes = {
  workoutList: PropTypes.object
};

export default WorkoutList;
