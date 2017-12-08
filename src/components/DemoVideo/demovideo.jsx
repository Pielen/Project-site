import React, { Component } from 'react';
import css from './demovideo.scss';

class Demo extends Component {
  render() {
    return (
      <div className="demo-wrapper">
        <h1 className="demo-text">
          Demo
        </h1>
        {this.props.demo &&
        <div className="media-embedder">
          <iframe src={this.props.demo} width="480" height="360" frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen></iframe>
        </div>}
        {this.props.gameplay &&
          <div>
            <h1 className="demo-text">
              Game play
            </h1>
          <div className="media-embedder">
            <iframe src={this.props.gameplay} width="800" height="360" frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen></iframe>
          </div>
        </div>}
      </div>
    );
  }
}

export default Demo;
