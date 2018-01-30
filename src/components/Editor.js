import React, { Component } from 'react';
import CodeMirror from 'react-codemirror'
import { Input, Button } from 'semantic-ui-react'
import languagesConfig from '../assets/languages'
import '../styles/App.css';
import 'codemirror/mode/javascript/javascript' 
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/markdown/markdown'
import 'codemirror/mode/css/css'

class Editor extends Component {

	constructor(props)
	{
		super(props);
		this.state = {
			name: '',
			code: '',
			id: 0,
			options: {
				lineNumbers: true,
				mode: ''
			},
			key: 0
		};

		this.saveGist = this.saveGist.bind(this);
		this.updateCode = this.updateCode.bind(this);
	}

	saveGist = () => { 
		const newGist = {
				id: 0,
				name: '', 
				code: ''
		};
		newGist.name = this.state.name;
		newGist.code = this.state.code;
		if(this.state.id) {
			newGist.id = this.state.id;
		}
		this.props.action(newGist);
		this.setState({name: '', key: Math.random()});
	}

	updateCode = (newCode) => {
		const code = newCode;
		this.setState({ code: code })
	}

	updateName = (event, data) => {
		const options = this.state.options;
		const name = data.value;

			if(name.indexOf(".") !== -1)
			{
				const extension = name.substr(name.indexOf("."), name.lenght);
				const language = languagesConfig.find(lang => lang.text === extension);
				if(language)
					options.mode = language.value
			}

			this.setState({ name, options })
	}

	componentWillReceiveProps() {
		this.updateCode(this.props.gist.code);
		this.updateName(null, { value: this.props.gist.name})
		this.setState({id: this.props.gist.id, key: Math.random()});
	}

	render() {

		return (
			<div className="Editor" key={this.state.key}>
				<Input className="text-input" onChange={this.updateName} defaultValue={this.state.name} fluid label='Nome' placeholder="Nome do gist com extensão (.css, .xml, .js, .md)"/>
				<CodeMirror value={this.state.code} onChange={this.updateCode} options={this.state.options} />
				<Button className="btn-primary" floated='right' gist={this.state.gist} onClick={this.saveGist}>Salvar</Button>
			</div>
		);
	}
}

export default Editor