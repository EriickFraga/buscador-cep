import { useContext, useState } from 'react';
import {BiSearchAlt} from 'react-icons/bi';
import { CepContext } from '../../providers/CepContext';
import Container from './styled';
import axios from '../../services/api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Buscador() {
	const {setCep} = useContext(CepContext);
	
	const [inputCep, setInputCep] = useState("");



	async function handleClickSearchButton() {
		if(inputCep === "") {
			toast.error("Você precisa preencher um CEP válido", {theme: "colored", autoClose: 2500})	
			return;
		} else {
			const {data} =  await axios.get(`${inputCep}/json`);
			setCep(data);
		}
	}

	return(
		<Container>
			<div>
				<input 
					type="text" 
					placeholder="Digite seu cep..." 
					onChange={(e) => setInputCep(e.target.value)}
				/>
				<button onClick={() => {handleClickSearchButton()}}>
					<BiSearchAlt size={25} color={"#fff"}/>
				</button>
			</div>
		</Container>
	)
};