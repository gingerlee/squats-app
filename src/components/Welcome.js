import React from 'react';
import { Button } from 'react-materialize';
import './styles/Welcome.css';
import { Link } from 'react-router-dom';


function Welcome(){
  return(
    <div className='welcome-intro'>
      <div className='welcome-content center'>
        <h4>A social workout app
          <br />
        to keep you motivated</h4>
        <h4 className='flow-text'>21 workouts - GO!</h4>
        <Button className='orange' waves='light'><Link to="/challenge"> Enter </Link></Button>
      </div>
    </div>
  );
}

export default Welcome;
