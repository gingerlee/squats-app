import React from 'react';
import './styles/SiteNav.css';
import {Navbar, NavItem} from 'react-materialize';
import { Link } from 'react-router-dom';

function SiteNav() {
  return (
    <div>
      <Navbar className='black' brand=' SQUATS' right>
        <NavItem><Link to='/challenge'>Challenge Home</Link></NavItem>
        <NavItem><Link to='/about'>About</Link></NavItem>
      </Navbar>
    </div>
  )
}

export default SiteNav;
