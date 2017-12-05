import React, { Component } from 'react';
import css from './about.scss';

class About extends Component {
  render() {
    return (
      <div className="about-wrapper">
        <h1 className="about-text">
          About
        </h1>
        <div className="about-container">
        {this.props.text.map((member, key) =>
          <div key={key} className="text-area">
            <h2 className="title">{member.title}</h2>
            <p className="text">{member.text}</p>
            <hr className="divider" />
          </div>
            )}
          </div>
      </div>
    );
  }
}

export default About;
