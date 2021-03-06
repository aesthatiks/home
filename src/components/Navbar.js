import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = props => {
  return (
    <nav>
      <Link className='home zoom' to='/'>
        <svg height='40px' viewBox='0 0 75 54'>
          <title>Aesthatiks</title>
          <g id='Page-1' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd' opacity='0.803617932'>
            <g id='Home-Copy' transform='translate(-80.000000, -60.000000)' fill='#FFFFFF' fillRule='nonzero'>
              <g id='Home' transform='translate(80.000000, 60.000000)'>
                <g id='Main-logo'>
                  <polygon id='Shape' points='33.393586 0 19.7813411 38.6 0 38.6 14.3498542 54 26.9562682 54 46 0'></polygon>
                  <polygon
                    id='Shape'
                    points='75 15.4 60.7683284 0.2 60.8357771 0 60.6334311 0 48.1554252 0 29 54 41.6803519 54 55.372434 15.4'
                  ></polygon>
                  <polygon id='Shape' points='22.4661654 26 0 26 11.8421053 14 27 14'></polygon>
                  <polygon id='Shape' points='56.625 54 47 44.6467066 51.5769231 32 75 54'></polygon>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </Link>
      <ul>
        <li>
          <NavLink exact activeClassName='active' to='/'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to='/mywork'>
            My Work
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName='active' to='/about'>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
