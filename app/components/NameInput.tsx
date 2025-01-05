import { Button } from 'baseui/button';
import { Input } from 'baseui/input';
import { useNameInput } from '../hooks/useNameInput';

const NameInput = () => {
    const { value, handleChange, handleSubmit } = useNameInput();

    return (
        <div className="flex space-x-4">
            <Input
                placeholder="Enter your name"
                value={value}
                onChange={(e) => handleChange(e.target.value)}
                positive={value.length > 0}
                error={value.length > 0}
            />
            <Button onClick={handleSubmit}>
                Register
            </Button>
        </div>
    );
};

export default NameInput;
