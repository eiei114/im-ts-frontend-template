import { createContext, useState, useEffect, ReactNode } from 'react';

interface UserSecretContextType {
    token: string | null;
    setUserToken: (token: string) => void;
    clearToken: () => void;
}

export const UserSecretContext = createContext<UserSecretContextType>({
    token: null,
    setUserToken: () => { },
    clearToken: () => { },
});

export const UserSecretProvider = ({ children }: { children: ReactNode }) => {
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        const storedToken = localStorage.getItem('userToken');
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    const setUserToken = (newToken: string) => {
        localStorage.setItem('userToken', newToken);
        setToken(newToken);
    };

    const clearToken = () => {
        localStorage.removeItem('userToken');
        setToken(null);
    };

    return (
        <UserSecretContext.Provider value={{ token, setUserToken, clearToken }}>
            {children}
        </UserSecretContext.Provider>
    );
};
