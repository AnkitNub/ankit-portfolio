import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import StarMessage from './components/starMessage/starMessage';
import StarButton from './components/starMessage/starButton';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		{/* <StarMessage /> */}
		<StarButton />
		<App />
	</React.StrictMode>
);
