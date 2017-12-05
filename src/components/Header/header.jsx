import React, { Component } from 'react';
import nisse from '../../assets/Nisse_logo1.png';
import './header.scss';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <img src={nisse} className="logo" alt="logo" />
      </header>
    );
  }
}

export default Header;
