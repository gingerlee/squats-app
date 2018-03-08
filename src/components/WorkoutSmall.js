import React from 'react';
import PropTypes from 'prop-types';
import { Button, Col } from 'react-materialize';

function WorkoutSmall(props) {
  return (
    <div>
      <style jsx>{`
          .workoutCard {
            padding-bottom: 1em;

            max-height: 100%;
          }
          .workoutImg {
            width: 100%;
            object-fit: cover;
          }
          `}</style>

      <Col s={12} m={6} l={4}>
        <div className='card workoutCard center'>
          <img className='workoutImg' src={props.image}></img>
          <h4>{props.title}</h4>
          <h5>{props.day}</h5>
          <p>Duration: {props.duration}</p>
          <p>Intensity: {props.intensity}</p>
          <p>Level: {props.level}</p>
          <Button className='black text-white' waves='light' node='a' target='_blank' href={props.url} >Workout!</Button>
        </div>
      </Col>
    </div>
  );
}

WorkoutSmall.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  day: PropTypes.string,
  duration: PropTypes.string,
  level: PropTypes.string,
  intensity: PropTypes.string,
  url: PropTypes.string
};

export default WorkoutSmall;
