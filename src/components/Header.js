import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
  return (
      <header className="ui pointing primary menu inverted">
        <Link className='header item' to='/'>IP-A</Link>
        <nav className="right menu">
          <Link className="item" to='/'>Home</Link>
          <Link className="item" to='/about'>About</Link>
          <Link className="item" to='/authors'>Authors</Link>
          <Link className="item" to='/earthquake'>Earthquake</Link>
          <Link className="item" to='/weather'>Weather</Link>
        </nav>
      </header>
  );
};

export default Header;
