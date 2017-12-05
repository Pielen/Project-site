import React, { Component } from 'react';
import MemberCard from '../MemberCard/membercard.jsx';
import './team.scss';

class Team extends Component {
  render() {
    return (
      <div className="team-wrapper">
        <h1 className="team-text">
          Team members
        </h1>
        <div className="team-container">
        {this.props.members.map((member, key) =>
              <MemberCard
                key={key}
                name={member.name}
                picture={member.picture}
                email={member.email}
                github={member.github}
                linkedin={member.linkedin}
                contribution={member.contribution}
                blog={member.blog}
                />
            )}
          </div>
      </div>
    );
  }
}

export default Team;
