import { useState } from 'react';

export const useNameInput = (initialValue: string = '') => {
    const [value, setValue] = useState(initialValue);
    const [token, setToken] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (newValue: string) => {
        setValue(newValue);
        setError(null);
    };

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
            setToken(data.token);
            setValue('');
            console.log('受け取ったトークン:', data.token);
        } catch (err) {
            setError(err instanceof Error ? err.message : '予期せぬエラーが発生しました');
        } finally {
            setIsLoading(false);
        }
    };

    return {
        value,
        token,
        isLoading,
        error,
        handleChange,
        handleSubmit
    };
};
