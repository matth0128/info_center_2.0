import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <div class="left">
            <div id="date"></div>
            <div id="clock">
              <ul>
                <li id="hours"></li>
                <li id="point">:</li>
                <li id="min"></li>
              </ul>
            </div>
            <div class="console">
              <button class="button" item="1">Traffic Map</button>
              <button class="button" item="2">Weather</button>
              <button class="button" item="3">Alerts</button>
              <button id="refresh_button" disabled>Refresh</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
