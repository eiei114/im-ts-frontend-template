import { type ReactNode, createContext, useEffect, useState } from "react";

interface UserSecretContextType {
	token: string | null;
	setUserToken: (token: string) => void;
	clearToken: () => void;
}

export const UserSecretContext = createContext<UserSecretContextType>({
	token: null,
	setUserToken: () => {},
	clearToken: () => {},
});

export const UserSecretProvider = ({ children }: { children: ReactNode }) => {
	const [token, setToken] = useState<string | null>(null);

	// 初期化
	useEffect(() => {
		const storedToken = localStorage.getItem("userToken");
		if (storedToken) {
			setToken(storedToken);
		}
	}, []);

	// トークンを設定関数
	const setUserToken = (newToken: string) => {
		localStorage.setItem("userToken", newToken);
		setToken(newToken);
	};

	// トークンを削除関数
	const clearToken = () => {
		localStorage.removeItem("userToken");
		setToken(null);
	};

	return (
		<UserSecretContext.Provider value={{ token, setUserToken, clearToken }}>
			{children}
		</UserSecretContext.Provider>
	);
};
