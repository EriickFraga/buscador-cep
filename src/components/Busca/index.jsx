import { useContext } from 'react';
import { CepContext } from '../../providers/CepContext';
import Container from './styled';

export default function Busca() {
	const {cep} = useContext(CepContext);

	console.log(cep)

	if(cep) {
		return(
			<Container>
				<h1>CEP: {cep.cep}</h1>
				<p><strong>Logradouro: {cep.logradouro}</strong></p>
				<p><strong>Complemento: {cep.complemento || 'Não há complemento'}</strong></p>
				<p><strong>Bairro: {cep.bairro}</strong></p>
				<p><strong>Localidade: {cep.localidade} - {cep.uf}</strong></p>
			</Container>
		);
	}
	return(
		<>
		</>
	);
};