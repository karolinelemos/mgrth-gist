import React, { Component } from 'react';
import { Icon, Menu } from 'semantic-ui-react'
import GistList from './GistList'

class MenuApp extends Component {
	constructor(props) 
	{
		super(props);
	}

	state = {}

	handleItemClick = (e, { name }) => this.setState({ activeItem: name })

	render() {
		const { activeItem } = this.state

		return (
			<Menu vertical>
				<Menu.Item name='new' active={activeItem === 'new'} onClick={this.handleItemClick}>
		          <Icon name='add' color="yellow" />
		          Novo Gist
		        </Menu.Item>

		         <Menu.Item>
		          Meus Gists
		          	{
		          		this.props.gistList ? 
		          		(
		          			this.props.gistList.map((gist) => {
		          				return <GistList key={gist.id} gist={gist}/>
		          			})
		          		) : null
		          	}
		        </Menu.Item>
			</Menu>
		);
	}
}

export default MenuApp;
