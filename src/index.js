import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.scss';
import App from './App';

const rootElement = document.querySelector('#root');
const root = ReactDOM.createRoot(rootElement);

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
