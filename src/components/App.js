import React, { Component } from 'react';
import '../styles/App.css';
import Particles from 'react-particles-js';
import particlesConfig from '../assets/particlesjs-config.js'
import { Grid } from 'semantic-ui-react'
import Header from './Header'
import Menu from './Menu'
import Editor from './Editor'

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			list: [],
			gist: {
				id: 0,
				name: "",
				code: ""
			}
		}

		this.updateGistList = this.updateGistList.bind(this);
		this.actionGist = this.actionGist.bind(this);
	}

	updateGistList(gist) {
		const newGist = gist;
	    const gistList = this.state.list;
		if(gist.id)
		{
			const gistIndex = gistList.findIndex(g => g.id === gist.id);
			gistList[gistIndex] = newGist;
		} else {
			newGist.id = gistList.length + 1;
	    	gistList.push(newGist);
		}

	    this.setState({list: gistList, gist: {name: '', code: '', id: ''}});
	}

	actionGist(action, gistId)
	{
		var gist = this.state.gist, gistList;

		if(gistId){
			gistList = this.state.list;
			gist = gistList.find(g => g.id === gistId);
		}  

		switch(action)
		{
			case 'remove': 
				const gistRemoveIndex = this.state.list.findIndex(g => g.id === gistId);
				this.setState({ gistList: gistList.splice(gistRemoveIndex, 1) });
				break;
			case 'edit': 
				this.setState({ gist })
				break;
			default:
				this.setState({ gist })
				break;
		} 
	}

	render() {
		return (
			<div>
		    	<div>
		    		<Header/>
		    		<Grid>
			    		<Grid.Column width={3}>
			    			<Menu gistList={this.state.list} action={this.actionGist}/>
			    		</Grid.Column>
			    		<Grid.Column width={10} className="editor-grid">
			    			<Editor action={this.updateGistList} gist={this.state.gist}/>
			    		</Grid.Column>
			    		<Grid.Column width={3}></Grid.Column>
		    		</Grid>
				</div>
				<Particles params={particlesConfig} width="100%" height="100%" className="Particles"/>
			</div>
		);
	}
}

export default App;
