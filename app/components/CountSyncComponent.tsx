import { Button } from 'baseui/button';
import { Input } from 'baseui/input';
import { useNumberInput } from '~/hooks/useNumberInput';
import { useUserInfoText } from '~/hooks/useUserInfoText';
import { useState, useEffect } from 'react';
const CountSyncComponent = () => {
    const { userInfo, error } = useUserInfoText();
    const { value, handleChange, handleSubmit, isValid, hasError } = useNumberInput('');
    const [count, setCount] = useState(0);

    const handleButtonClick = async () => {
        const result = await handleSubmit();
        if (result) {
            setCount(result.count);
        } else {
            console.log('エラーが発生しました');
        }
    };

    useEffect(() => {
        setCount(userInfo?.count || 0);
    }, [userInfo]);

    return (
        <div className="flex flex-col items-center space-y-4">
            {userInfo && (
                <div className="text-gray-800 dark:text-gray-200 text-center">
                    <p>名前: {userInfo.name}</p>
                    <p>カウント: {count}</p>
                </div>
            )}
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
            {hasError && <div className="text-red-500">数字のみを入力してください</div>}
            {error ? (
                <div className="text-red-500">{error}</div>
            ) : null}
        </div>
    );
};

export default CountSyncComponent; 