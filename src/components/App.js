import React, { Component } from 'react';
import '../styles/App.css';
import Particles from 'react-particles-js';
import particlesConfig from '../assets/particlesjs-config.js'

class App extends Component {
  render() {
  	console.log(particlesConfig);
    return (
    	<div className="App">
    		<h1>Mgrth Gist :)</h1>
    		<Particles params={particlesConfig} width="100%" height="100%"/>
    	</div>
    );
  }
}

export default App;
