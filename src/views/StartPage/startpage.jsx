import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import css from './startpage.scss';
import doslogo from '../../assets/dos_logo.png';
import nisselogo from '../../assets/Nisse_logo1.png';
import knightlogo from '../../assets/KR1.png';

class StartPage extends Component {
  render() {
    return (
      <div className="startpage-container">
        <div className="startpage-box">
        <h1 className="startpage-text">
          To get started, choose one of the projects listed below
        </h1>
        <div className="list-container">
          <div className="project-link-button">
            <Link className="" to="/dos"><img alt="DOS" src={doslogo} className="button-logo" /></Link>
          </div>
          <div className="project-link-button">
            <Link className="" to="/kalknisse"><img alt="Nisse" src={nisselogo} className="button-logo" /></Link>
          </div>
          <div className="project-link-button">
            <a href="https://galnegus.github.io/KnightRider/"><img alt="KnightRider" src={knightlogo} className="button-logo" /></a>
          </div>
      </div>
      </div>
      </div>
    );
  }
}

export default StartPage;
