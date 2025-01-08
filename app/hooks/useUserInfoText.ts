import { useContext, useEffect, useState } from 'react';
import { UserSecretContext } from '../contexts/UserSecretContext';
import { UserInformationContext } from '../contexts/UserInformationContext';

export const useUserInfoText = () => {
    const { token } = useContext(UserSecretContext);
    const { setName, setCount } = useContext(UserInformationContext);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchUserInfo();
    }, [token]);


    const fetchUserInfo = async () => {
        if (!token) {
            setError('ユーザーが存在しません');
            return;
        }

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
            setName(data.name);
            setCount(data.count);
        } catch (err) {
            setError(err instanceof Error ? err.message : '予期せぬエラーが発生しました');
        }
    };

    return {
        error,
    };
};
