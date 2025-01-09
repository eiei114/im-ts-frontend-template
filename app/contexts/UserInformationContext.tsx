import { type ReactNode, createContext, useEffect, useState } from "react";

interface UserInformationContextType {
	name: string;
	setName: (name: string) => void;
	count: number;
	setCount: (count: number) => void;
}

export const UserInformationContext = createContext<UserInformationContextType>(
	{
		name: "",
		setName: () => {},
		count: 0,
		setCount: () => {},
	},
);

export const UserInformationProvider = ({
	children,
}: { children: ReactNode }) => {
	const [name, setName] = useState("");
	const [count, setCount] = useState(0);

	return (
		<UserInformationContext.Provider value={{ name, setName, count, setCount }}>
			{children}
		</UserInformationContext.Provider>
	);
};
