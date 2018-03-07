import React from 'react';
import PropTypes from 'prop-types';

function User(props) {
  return (
    <div className='card'>
      <img src={props.image} />
      <h4>{props.name}</h4>
      <h5>{props.title}</h5>
      <style jsx>{`
        .card {
          padding: 15px;
        }
      `}</style>
    </div>
  );
}

User.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
};

export default User;
