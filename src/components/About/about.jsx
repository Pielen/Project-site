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
            {member.listtext ?
              <div>
              {member.text ?
                <p className="text">{member.text}
              {member.link && <a href={member.link} target="blank" >{member.linktext}</a>}
            </p> : ''}
              <ul className="item-list">
                {member.listtext.map((listitem, key) =>
                      <li key={key} className="list-item">
                        {listitem}
                      </li>
                    )}
              </ul>
            </div>
              : <p className="text">{member.text}
            {member.link && <a href={member.link} target="blank" >{member.linktext}</a>}
            </p>
          }
            <hr className="divider" />
          </div>
            )}
          </div>
      </div>
    );
  }
}

export default About;
