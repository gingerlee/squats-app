import React from 'react';
import PropTypes from 'prop-types';
import {Col} from 'react-materialize';

function User(props) {
  return (
    <div>
      <style jsx>{`
        .user {
          padding: 15px;
          width: 20vw;
        }
        .userImg {
          width: 17vw;
        }
        `}</style>
      <Col s={12} m={6} l={4} className='card user'>
        <img className='userImg' src={props.image} />
        <h4>{props.name}</h4>
        <h5>{props.title}</h5>
      </Col>
    </div>
  );
}

User.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
};

export default User;
