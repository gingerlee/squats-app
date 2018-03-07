import React from 'react';
import PropTypes from 'prop-types';

function WorkoutSmall(props) {
  return (
    <div className='card'>
      <img src={props.image} />
      <h4>{props.title}</h4>
      <h5>{props.day}</h5>
      <p>Duration: {props.duration}</p>
      <p>Intensity: {props.intensity}</p>
      <p>Level: {props.level}</p>
      <style jsx>{`
        .card {
          padding: 15px;
        }
      `}</style>
    </div>
  );
}

WorkoutSmall.propTypes = {
  title: PropTypes.string,
  day: PropTypes.string,
  duration: PropTypes.string,
  level: PropTypes.string,
  intensity: PropTypes.string,
  image: PropTypes.string
};

export default WorkoutSmall;
