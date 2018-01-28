import React, { Component } from 'react';
import '../styles/App.css';
import Particles from 'react-particles-js';
import particlesConfig from '../assets/particlesjs-config.js'
import { Grid, Button } from 'semantic-ui-react'
import Header from './Header'
import Menu from './Menu'
import Editor from './Editor'

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			list: []
		}
	}

	updateGistList = (event, element) => {
	    const newGist = element.gist;
	    const gistList = this.state.list;
	    newGist.id = gistList.length;

	    gistList.push(newGist);

	    this.setState({list: gistList});
	}

  render() {
    return (
    	<div>
	    	<div>
	    		<Header/>
	    		<Grid>
		    		<Grid.Column width={3}>
		    			<Menu gistList={this.state.list}/>
		    		</Grid.Column>
		    		<Grid.Column width={10}>
		    			<Editor action={this.updateGistList}/>
		    		</Grid.Column>
		    		<Grid.Column width={3}>
		    			
		    		</Grid.Column>
	    		</Grid>
			</div>
			<Particles params={particlesConfig} width="100%" height="100%" className="Particles"/>
		</div>
    );
  }
}

export default App;
