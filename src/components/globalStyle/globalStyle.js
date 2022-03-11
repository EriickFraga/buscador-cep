import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		font-family: Arial, Helvetica, sans-serif;
		-webkit-font-smoothing: antialiased;
  	-moz-osx-font-smoothing: grayscale;
	}

	body {
		height: 100vh;
		width: 100vw;
		background: linear-gradient(#121212, #212b46);
		display: flex;
		justify-content: center;
		align-items:center;
	}

	button {
		cursor: pointer;
	}
`;

export default globalStyle;