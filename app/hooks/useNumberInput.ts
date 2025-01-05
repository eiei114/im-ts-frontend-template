import { useState } from 'react';

export const useNumberInput = (initialValue: string = '') => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (newValue: string) => {
        setValue(newValue);
    };

    const handleSubmit = () => {
        if (!/^\d+$/.test(value)) {
            console.log('数字ではありません');
        } else {
            // 数字だったら入力値を削除
            setValue('');
            // todo: バックエンドに送信
            // todo: バックエンドから結果を受け取る
            // todo: 結果を表示
        }
    };

    const isValid = value.length > 0 && /^\d+$/.test(value);
    const hasError = value.length > 0 && !/^\d+$/.test(value);

    return {
        value,
        handleChange,
        handleSubmit,
        isValid,
        hasError
    };
};
