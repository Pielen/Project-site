import React, { Component } from 'react';
import css from './lineriderpage.scss';
import Header from '../../components/Header/header.jsx';
import TopBar from '../../components/TopBar/topbar.jsx';
import Team from '../../components/Team/team.jsx';
import About from '../../components/About/about.jsx';
import Demo from '../../components/DemoVideo/demovideo.jsx';
import Media from '../../components/Media/media.jsx';
import { LINETEAM, ABOUT, IMAGES } from '../../lineridertext.jsx';
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
          {this.state.currentView === 'about' ? <Header image={logo} fullscreen={true} /> : <Header image={logo} />}
        </div>
          {this.state.currentView === 'about' && <About text={ABOUT} />}
          {this.state.currentView === 'team' && <Team members={LINETEAM} />}
          {this.state.currentView === 'demo' && <Demo demo={"https://www.youtube.com/embed/sMOWD8I4XGs?rel=0&amp;ecver=2"} />}
          {this.state.currentView === 'media' && <Media images={IMAGES} />}
      </div>
    );
  }
}

export default LineRiderPage;
