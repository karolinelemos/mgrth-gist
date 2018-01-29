import React, { Component } from 'react';
import CodeMirror from 'react-codemirror'
import { Input, Button } from 'semantic-ui-react'
import 'codemirror/mode/javascript/javascript' 
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/markdown/markdown'
import languagesConfig from '../assets/languages'
import '../styles/App.css';

class Editor extends Component {

	constructor(props)
	{
		super(props);
		this.state = {
			gist: {
				id: 0,
				name: '', 
				code: ''
			},
			name: '',
			code: '',
			options: {
				lineNumbers: true,
				mode: ''
			}
		};

		this.saveGist = this.saveGist.bind(this);
	}

	saveGist = () => { 
		const newGist = {
				id: 0,
				name: '', 
				code: ''
		};
		newGist.name = this.state.name;
		newGist.code = this.state.code;
		this.props.action(newGist);
	}

	updateCode = (newCode) => {
		const code = newCode;
		this.setState({ code })
	}

	updateName = (event, data) => {
		const options = this.state.options;
		const name = data.value;
		//gist.name = data.value;

		if(name.indexOf(".") !== -1)
		{
			const extension = name.substr(name.indexOf("."), name.lenght);
			const language = languagesConfig.find(lang => lang.text === extension);
			if(language)
				options.mode = language.value
		}

		this.setState({ name, options })
	}

	render() {
		const gist = this.props.gist.name ? this.props.gist : this.state.gist;

		return (
			<div className="Editor">
				<Input className="text-input" onChange={this.updateName} defaultValue={gist.name} fluid label='Nome' placeholder="Nome do gist com extensão"/>
				<CodeMirror value={gist.code} onChange={this.updateCode} options={this.state.options} />
				<Button className="btn-primary" floated='right' gist={this.state.gist} onClick={this.saveGist}>Salvar</Button>
			</div>
		);
	}
}

export default Editor