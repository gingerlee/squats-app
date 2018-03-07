import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-materialize';

function WorkoutSmall(props) {
  return (
    <div className='card'>

      <h4>{props.title}</h4>
      <h5>{props.day}</h5>
      <p>Duration: {props.duration}</p>
      <p>Intensity: {props.intensity}</p>
      <p>Level: {props.level}</p>
      <Button className='black text-white' href={props.url}>Workout!</Button>
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
  url: PropTypes.string
};

export default WorkoutSmall;

// <img src={require(`./../${props.image}`)}></img>
// image: PropTypes.string,
