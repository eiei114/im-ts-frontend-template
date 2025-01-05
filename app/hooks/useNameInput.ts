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
        }
    };

    return {
        value,
        handleChange,
        handleSubmit
    };
};
