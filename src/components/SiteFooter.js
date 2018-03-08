import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from 'react-materialize';

function SiteFooter() {
  return (
    <div>
    <style jsx>{`
      Footer {
        bottom: 0;
        width: 100%;
        margin: 0 auto;
      }
    `}</style>
      <Footer copyrights="2018 MIT Copyright"
        className='example black'
        >
        <h5 className="white-text">Squats App</h5>
        <p className="grey-text text-lighten-4">Keep motivated with your friends</p>
      </Footer>

    </div>
  )
}

export default SiteFooter;
