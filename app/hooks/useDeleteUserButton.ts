import { useContext, useState } from 'react';
import { UserSecretContext } from '../context/UserSecretContext';

export const useDeleteUserButton = () => {
    const { token, clearToken } = useContext(UserSecretContext);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleDelete = async () => {
        if (!token) {
            setError('トークンが存在しません');
            return;
        }

        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch('/user/destroy', {
                method: 'POST',
                headers: {
                    'accept': 'application/json',
                    'x-token': token
                }
            });

            if (!response.ok) {
                throw new Error('削除に失敗しました');
            }

            clearToken();
        } catch (err) {
            setError(err instanceof Error ? err.message : '予期せぬエラーが発生しました');
        } finally {
            setIsLoading(false);
        }
    };

    return {
        isLoading,
        error,
        handleDelete
    };
};
