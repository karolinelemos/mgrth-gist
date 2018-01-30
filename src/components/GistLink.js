import React, { Component } from 'react';

class GistLink extends Component {
	render() {
		const code = this.props.location.code ? this.props.location.code : "404: Gist não encontrado";

		return (
			<pre>
				{code}
			</pre>	
		)
	}
}

export default GistLink;