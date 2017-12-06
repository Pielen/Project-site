import React, { Component } from 'react';
import css from './lineriderpage.scss';
import Header from '../../components/Header/header.jsx';
import TopBar from '../../components/TopBar/topbar.jsx';
import Team from '../../components/Team/team.jsx';
import About from '../../components/About/about.jsx';
import Demo from '../../components/DemoVideo/demovideo.jsx';
import Media from '../../components/Media/media.jsx';
import { LINETEAM, ABOUT } from '../../lineridertext.jsx';
import logo from '../../assets/Nisse_logo1.png';


class LineRiderPage extends Component {
  constructor(props) {
  super(props);
  this.changeView = this.changeView.bind(this);

  this.state = {
    currentView: 'about',
  };
}

changeView(e){
  this.setState({currentView: e});
}

  render() {
    return (
      <div className="App">
        <div className="header-group">
          <TopBar onchange={this.changeView} />
          <Header image={logo} />
        </div>
          {this.state.currentView === 'about' && <About text={ABOUT} />}
          {this.state.currentView === 'team' && <Team members={LINETEAM} />}
          {this.state.currentView === 'demo' && <Demo />}
          {this.state.currentView === 'media' && <Media />}
      </div>
    );
  }
}

export default LineRiderPage;
