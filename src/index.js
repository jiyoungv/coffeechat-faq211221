import 'react-app-polyfill/ie11'; // for ie11
import 'react-app-polyfill/stable'; // for ie11
import React from 'react';
import ReactDOM from 'react-dom';
// import './font.css';
import { BrowserRouter } from "react-router-dom";
import App from './App';

ReactDOM.render(
	<BrowserRouter>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</BrowserRouter>,
	document.getElementById('root')
);