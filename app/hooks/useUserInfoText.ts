import { useContext, useEffect, useState } from 'react';
import { UserSecretContext } from '../context/UserSecretContext';

interface UserInfo {
    id: string;
    name: string;
    count: number;
}

export const useUserInfoText = () => {
    const { token } = useContext(UserSecretContext);
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
    const [error, setError] = useState<string | null>(null);

    const fetchUserInfo = async () => {
        console.log('fetchUserInfo');
        if (!token) return;

        try {
            const response = await fetch('/user/get', {
                method: 'POST',
                headers: {
                    'accept': 'application/json',
                    'x-token': token
                }
            });

            if (!response.ok) {
                throw new Error('ユーザー情報の取得に失敗しました');
            }

            const data = await response.json();
            setUserInfo(data);
            console.log('userInfo', data);
        } catch (err) {
            setError(err instanceof Error ? err.message : '予期せぬエラーが発生しました');
        }
    };

    useEffect(() => {
        fetchUserInfo();
    }, [token]);

    return {
        userInfo,
        error,
        refetch: fetchUserInfo
    };
};
