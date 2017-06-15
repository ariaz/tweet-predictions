import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import { NavigationLayer } from './components/NavigationLayer'
import { LogoBar } from './components/LogoBar'
import { LinesFramework } from './components/LinesFramework'


class App extends Component {
  render() {
    return (
      <div>
        <LinesFramework/>
        <NavigationLayer/>
      </div>
    );
  }
}

export default App;