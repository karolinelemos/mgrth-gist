import React, { Component } from 'react';
import { Icon, Menu } from 'semantic-ui-react'

class App extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<Menu.Item>
				<Icon color="red" name='trash' />
				<Icon color="yellow" name='pencil' />
			    {this.props.gist.name}
			</Menu.Item>
		);
	}
}

export default App;
