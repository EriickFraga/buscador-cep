import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	justify-content: center;

	div {
		background-color: rgba(255,255,255,0.2);
		padding: 15px;
		border-radius: 8px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 25px;
	}

	input {
		border-radius: 5px;
		background-color: transparent;
		color: #fff;
		font-size: 20px;
		border: 0;
		outline: none;

		&::placeholder {
			color: white;
			font-size: 17px;
		}
	}

	button {
		border: 0;
		background-color: transparent;
	}

`;


export default Container;