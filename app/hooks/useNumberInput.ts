import { useState, useContext } from 'react';
import { UserSecretContext } from '../context/UserSecretContext';

export const useNumberInput = (initialValue: string = '') => {
    const [value, setValue] = useState(initialValue);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const { token } = useContext(UserSecretContext);

    const handleChange = (newValue: string) => {
        setValue(newValue);
        setError(null);
    };

    const handleSubmit = async () => {
        if (!/^\d+$/.test(value)) {
            setError('数字のみを入力してください');
            return null;
        }

        setError(null);
        setIsLoading(true);

        try {
            const response = await fetch('/user/count', {
                method: 'POST',
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json',
                    'x-token': token || ''
                },
                body: JSON.stringify({ count: parseInt(value, 10) })
            });

            if (!response.ok) {
                throw new Error('APIリクエストが失敗しました');
            }

            const data = await response.json();
            setValue('');
            return data;
        } catch (err) {
            setError(err instanceof Error ? err.message : '予期せぬエラーが発生しました');
            return null;
        } finally {
            setIsLoading(false);
        }
    };

    const isValid = value.length > 0 && /^\d+$/.test(value);
    const hasError = value.length > 0 && !/^\d+$/.test(value);

    return {
        value,
        isLoading,
        error,
        handleChange,
        handleSubmit,
        isValid,
        hasError
    };
};
