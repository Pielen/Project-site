import React, { Component } from 'react';
import css from './dospage.scss';
import Header from '../../components/Header/header.jsx';
import TopBar from '../../components/TopBar/topbar.jsx';
import Team from '../../components/Team/team.jsx';
import About from '../../components/About/about.jsx';
import Demo from '../../components/DemoVideo/demovideo.jsx';
import Media from '../../components/Media/media.jsx';
import { DOSTEAM, ABOUT, IMAGES } from '../../dostext.jsx';
import logo from '../../assets/dos_logo.png';
import logo2 from '../../assets/dos_logo2.png';

class DOSpage extends Component {
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
          {this.state.currentView === 'about' ? <Header image={logo} fullscreen={true} /> : <Header image={logo2} />}
        </div>
        {this.state.currentView === 'about' && <About text={ABOUT} />}
        {this.state.currentView === 'team' && <Team members={DOSTEAM} />}
        {this.state.currentView === 'demo' &&
          <Demo
            demo={"https://www.youtube.com/embed/qb6y1uFBr30?rel=0?ecver=2"}
            gameplay={"https://www.youtube.com/embed/b8FwIVw2N_o?rel=0?ecver=2"}
            />}
        {this.state.currentView === 'media' && <Media images={IMAGES} />}
      </div>
    );
  }
}

export default DOSpage;
