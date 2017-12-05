import React, { Component } from 'react';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';
import mail from '../../assets/mail.png';
import blog from '../../assets/blog.png';
//import css from './membercard.scss';


class MemberCard extends Component {
  render() {
    return (
      <div className="member-wrapper">
        <div className="member-header">
          <img className="member-picture" src={this.props.picture} alt="avatar" />
            <h1 className="member-name"> {this.props.name} </h1>
            <div className="icon-row">
              {this.props.blog &&
              <a className="icon-link" target="_blank" href={this.props.blog}> <img className='icon' src={blog} alt="blog-icon" /> </a>}
              {this.props.email &&
              <a className="icon-link" href={`mailto:(${this.props.email})`}><img className='icon' src={mail} alt="mail-icon" /> </a>}
              {this.props.linkedin &&
              <a className="icon-link" target="_blank" href={this.props.linkedin}> <img className='icon' src={linkedin} alt="linkedin-icon" /> </a>}
              {this.props.github &&
              <a className="icon-link" target="_blank" href={this.props.github}> <img className='icon' src={github} alt="github-icon" /> </a>}
            </div>
          </div>
        <ul className="contribution-list">
          {this.props.contribution.map((contribution, key) =>
                <li key={key} className="contribution-item">
                  {contribution}
                </li>
              )}
        </ul>
      </div>
    );
  }
}

export default MemberCard;
