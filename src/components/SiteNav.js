import React from 'react';
import {Navbar, NavItem} from 'react-materialize';
import { Link } from 'react-router-dom';

function SiteNav() {
  return (
    <div>
    <style jsx>{`
      .logo {
        padding-left: 10px;
      }
    `}</style>
      <Navbar className='black logo' brand='SQUATS' right>
        <NavItem><Link to='/challenge'>Challenge Home</Link></NavItem>
        <NavItem><Link to='/about'>About</Link></NavItem>
      </Navbar>
    </div>
  )
}

export default SiteNav;
