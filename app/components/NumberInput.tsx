import { Button } from 'baseui/button';
import { Input } from 'baseui/input';
import { useNumberInput } from '~/hooks/useNumberInput';
import { useState } from 'react';

const NumberInput = () => {
    const { value, handleChange, handleSubmit, isValid, hasError } = useNumberInput();
    const [count, setCount] = useState<number | null>(null);

    const handleButtonClick = async () => {
        const result = await handleSubmit();
        if (result && result.count) {
            setCount(result.count);
        }
    };

    return (
        <div className="flex flex-col space-y-4">
            <div className="flex space-x-4">
                <Input
                    placeholder="Numbers only"
                    value={value}
                    onChange={(e) => handleChange(e.target.value)}
                    positive={isValid}
                    error={hasError}
                />
                <Button onClick={handleButtonClick}>
                    Send
                </Button>
            </div>
            {count !== null && (
                <div className="text-gray-800 dark:text-gray-200">
                    Count: {count}
                </div>
            )}
        </div>
    );
};

export default NumberInput;
