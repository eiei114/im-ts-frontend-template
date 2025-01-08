import { useState, useContext } from 'react';
import { UserSecretContext } from '../contexts/UserSecretContext';

export const useNameInput = (initialValue: string = '') => {
    const { setUserToken } = useContext(UserSecretContext);
    const [value, setValue] = useState(initialValue);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // 関数
    const handleChange = (newValue: string) => {
        setValue(newValue);
        setError(null);
    };

    // 関数
    const handleSubmit = async () => {
        if (value.length === 0) {
            setError('入力値が空です');
            return;
        }

        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch('/user/create', {
                method: 'POST',
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: value })
            });

            if (!response.ok) {
                throw new Error('APIリクエストが失敗しました');
            }

            const data = await response.json();
            setUserToken(data.token);
            setValue('');
            console.log('受け取ったトークン:', data.token);
        } catch (err) {
            setError(err instanceof Error ? err.message : '予期せぬエラーが発生しました');
        } finally {
            setIsLoading(false);
        }
    };

    return {
        // リアクティブプロパティ
        value,
        // リアクティブプロパティ
        isLoading,
        // リアクティブプロパティ
        error,
        // 関数
        handleChange,
        // 関数
        handleSubmit
    };
};
