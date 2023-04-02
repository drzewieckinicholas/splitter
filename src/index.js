import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {store} from './app/store';
import './scss/index.scss';
import App from './App';

const rootElement = document.querySelector('#root');
const root = ReactDOM.createRoot(rootElement);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
);
