import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import GistLink from './components/GistLink'
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import 'codemirror/lib/codemirror.css';
import { HashRouter, Route } from 'react-router-dom';

ReactDOM.render(
	<HashRouter>
		<div>
			<Route exact path="/" component={App} />
			<Route path="/:id" name="gist" component={GistLink}></Route>
		</div>
	</HashRouter>, document.getElementById('root'));
registerServiceWorker();
