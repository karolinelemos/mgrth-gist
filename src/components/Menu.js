import React, { Component } from 'react';
import { Icon, Menu, Button } from 'semantic-ui-react'

class MenuApp extends Component {
	constructor(props) 
	{
		super(props);
	}

	state = {}

	handleItemClick = (e, { name }) => this.setState({ activeItem: name })

	editGist = (e, element) => 
	{
		this.props.action('edit', element.id);
	}

	removeGist = (e, element) => 
	{
		this.props.action('remove', element.id);
	}

	render() {
		const { activeItem } = this.state

		return (
			<Menu vertical>
				<Menu.Item name='new' active={activeItem === 'new'} onClick={this.handleItemClick}>
		          <Icon name='add' className="app-font-color" />
		          Novo Gist
		        </Menu.Item>

		         <Menu.Item>
		          Meus Gists
		          	{
		          		this.props.gistList ? 
		          		(
		          			this.props.gistList.map((gist) => {
		          				return (
		          					<Menu.Item key={gist.id}>
										<div className='GridList'>
											<p>{gist.name}</p>
										    <Button.Group className="app-font-color">
												<Button basic size='mini' icon='pencil' onClick={this.editGist} id={gist.id}/>
												<Button basic size='mini' icon='trash' onClick={this.removeGist} id={gist.id}/>
											</Button.Group>
										</div>
									</Menu.Item>
		          				)
		          			})
		          		) : null
		          	}
		        </Menu.Item>
			</Menu>
		);
	}
}

export default MenuApp;
