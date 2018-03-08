import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-materialize';

function WorkoutSmall(props) {
  return (
    <div>
      <style jsx>{`
          .card {
            padding: 15px;
          }
          `}</style>

      <div className='card'>
        <img src={props.image}></img>
        <h4>{props.title}</h4>
        <h5>{props.day}</h5>
        <p>Duration: {props.duration}</p>
        <p>Intensity: {props.intensity}</p>
        <p>Level: {props.level}</p>
        <Button className='black text-white' waves='light' node='a' target='_blank' href={props.url} >Workout!</Button>
      </div>
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
