import React, { Component } from 'react';
import CodeMirror from 'react-codemirror'
import { Input, Button } from 'semantic-ui-react'
import 'codemirror/mode/javascript/javascript' 
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/markdown/markdown'
import languagesConfig from '../assets/languages'

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
			options: {
				lineNumbers: true,
				mode: ''
			}
		};

		this.saveGist = this.saveGist.bind(this);
	}

	saveGist = () => { 
		const newGist = this.state.gist;
		this.props.action(newGist);
	}

	updateCode = (newCode) => {
		const gist = this.state.gist;
		gist.code = newCode;
		this.setState({ gist })
	}

	updateName = (event, data) => {
		const options = this.state.options;
		const gist = this.state.gist;
		gist.name = data.value;

		if(gist.name.indexOf(".") !== -1)
		{
			const extension = gist.name.substr(gist.name.indexOf("."), gist.name.lenght);
			const language = languagesConfig.find(lang => lang.text === extension);
			if(language)
				options.mode = language.value
		}

		this.setState({ gist, options })
	}

	render() {
		const { gist } = this.props ? this.props : this.state;
        console.log(gist);
		return (
			<div>
				<Input onChange={this.updateName} fluid label='Nome' placeholder="Nome do gist com extensão"/>
				<CodeMirror value={gist.code} onChange={this.updateCode} options={this.state.options} />
				<Button floated='right' gist={this.state.gist} primary onClick={this.saveGist}>Salvar</Button>
			</div>
		);
	}
}

export default Editor