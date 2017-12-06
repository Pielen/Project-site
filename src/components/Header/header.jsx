import React, { Component } from 'react';
import css from './header.scss';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <img src={this.props.image} className="logo" alt="logo" />
      </header>
    );
  }
}

export default Header;
