import React, { Component } from 'react';
import logo from './patrick.png';
import './App.css';
import YouTube from 'react-youtube'; 

class App extends Component {
  render() {
    
    const opts = {
      width: '100%',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        list: 'PLa03iLiFF1Q2pkeMcktAlEQhD_F1q1Pkr',
        rel: 0,
        showinfo: 1
      }
    };
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Patrick's Heavy Corner</h1>
        </header>
        <br/>

        <div className="Video-container">
          <YouTube
          videoId="q3y3rirNy0E"
          opts={opts}
          onReady={this._onReady}
          onEnd={this._onEnd}
          />
        </div>
        <p className="App-intro">
          Please select the song from video's top left corner.
        </p>
        
      </div>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }
  _onEnd(event) {
    // access to player in all event handlers via event.target
    event.target.nextVideo();
  }
}

export default App;
