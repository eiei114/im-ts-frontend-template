import { Button } from 'baseui/button';
import { Input } from 'baseui/input';
import { useNumberInput } from '~/hooks/useNumberInput';

const NumberInput = () => {
    const { value, handleChange, handleSubmit, isValid, hasError } = useNumberInput();

    return (
        <div className="flex space-x-4">
            <Input
                placeholder="Numbers only"
                value={value}
                onChange={(e) => handleChange(e.target.value)}
                positive={isValid}
                error={hasError}
            />
            <Button onClick={handleSubmit}>
                Send
            </Button>
        </div>
    );
};

export default NumberInput;
