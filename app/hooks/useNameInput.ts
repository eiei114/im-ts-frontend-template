import { useState } from 'react';

export const useNameInput = (initialValue: string = '') => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (newValue: string) => {
        setValue(newValue);
    };

    const handleSubmit = () => {
        if (value.length === 0) {
            console.log('入力値が空です');
        } else {
            setValue('');
            // todo: バックエンドに送信
            // todo: バックエンドから結果を受け取る(Keyを受け取る)
            // todo: 結果を表示
        }
    };

    return {
        value,
        handleChange,
        handleSubmit
    };
};
