import React, { Component } from 'react';
import { Icon, Menu, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class MenuApp extends Component {
	newGist = (e, element) => 
	{
		this.props.action('new');
	}

	editGist = (e, element) => 
	{
		this.props.action('edit', element.id);
	}

	removeGist = (e, element) => 
	{
		this.props.action('remove', element.id);
	}

	render() {
		return (
			<Menu vertical>
				<Menu.Item onClick={this.newGist}>
		          <Icon name='add' className="app-font-color" />
		          Novo Gist
		        </Menu.Item>

		         <Menu.Item>
		          Meus Gists
		          	{
		          		this.props.gistList ? 
		          		(
		          			this.props.gistList.map((gist) => {
		          				const link = "/" + gist.name;
		          				return (
		          					<Menu.Item key={gist.id}>
										<div className='GridList'>
											<Link to={{pathname: link, code: gist.code}}>{gist.name}</Link>
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
