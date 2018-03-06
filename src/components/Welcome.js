import React from 'react';
import { Button } from 'react-materialize';
import './styles/Welcome.css';



function Welcome(){
  return(
    <div>
      <div className='intro'>
        <div className='text'>
          <h4 >A social workout app <br />
          to keep you motivated</h4>
          <h4 className='flow-text'>21 workouts - GO!</h4>
          <Button className='orange' waves='light'>Enter</Button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
