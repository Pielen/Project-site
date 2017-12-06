import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/header.jsx';
import css from './startpage.scss';
import logo from '../../assets/Nisse_logo1.png';

class StartPage extends Component {
  render() {
    return (
      <div className="App">
        <Header image={logo} />
        <p className="StartPage-wrapper">
          To get started, choose one of the projects listed below.
        </p>
        <div className="list-container">
        <ul className="project-list">
          <li className="project-item"><Link className="project-link" to="/dos"> DOS - defense of Saturn </Link></li>
          <li className="project-item"><Link className="project-link" to="/linerider"> LineRider </Link></li>
        </ul>
      </div>
      </div>
    );
  }
}

export default StartPage;
