import { createContext, useState } from "react";

export const CepContext = createContext({});

export const CepProvider = ({ children }) => {
	const [cep, setCep] = useState("");

	return (
		<CepContext.Provider value={{ cep, setCep }}>
			{children}
		</CepContext.Provider>
	)
}