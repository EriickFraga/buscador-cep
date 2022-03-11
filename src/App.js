import React from 'react';
import GlobalStyle from './components/globalStyle/globalStyle';
import Title from './components/Title';
import Buscador from './components/Buscador';
import Busca from './components/Busca';
import { ToastContainer } from 'react-toastify';
import './App.css';

function App() {

	return (
		<div className="container_principal">
			<Title />
			<Buscador />
			<Busca />
			<GlobalStyle />
			<ToastContainer />
		</div>
	);
}

export default App;
