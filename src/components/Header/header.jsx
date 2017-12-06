import React, { Component } from 'react';
import downArrow from '../../assets/down-arrow.png';
import css from './header.scss';

class Header extends Component {
  render() {
    return (
      <header className={this.props.fullscreen === true ? "full-header" : "header"}>
        <img src={this.props.image} className="logo" alt="logo" />
        {this.props.fullscreen === true && <img src={downArrow} className="arrow" alt="arrow" /> }
      </header>
    );
  }
}

export default Header;
