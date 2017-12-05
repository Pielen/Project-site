import React, { Component } from 'react';
import css from './topbar.scss';

class TopBar extends Component {
  render() {
    return (
      <div className="topbar-container">
        <ul className="menu-items">
          <li className="item" onClick={()=>this.props.onchange('about')}> About </li>
          <li className="item" onClick={()=>this.props.onchange('demo')}> Demo </li>
          <li className="item" onClick={()=>this.props.onchange('team')}> Team </li>
          <li className="item" onClick={()=>this.props.onchange('media')}> Media </li>
        </ul>
      </div>
    );
  }
}

export default TopBar;
