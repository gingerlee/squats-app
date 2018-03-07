import React from 'react';
import PropTypes from 'prop-types';

function Hero(props) {
  return (
    <div className='hero'>
      <h1>{props.heroTitle}</h1>
      <style jsx>{`
        .hero {
          color: white;
          height: 400px;
          width: 100%;
          background-position: center;
          background-size: cover;
          background-image: url(${props.heroImage});
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        h1 {
          font-family: monospace;
        }
        `}</style>
    </div>
  );
}

Hero.propTypes = {
  heroImage: PropTypes.string,
  heroTitle: PropTypes.string
};

export default Hero;
