import { Button } from 'baseui/button';
import { Input } from 'baseui/input';
import { useNumberInput } from '~/hooks/useNumberInput';
import { useUserInfoText } from '~/hooks/useUserInfoText';

const CountSyncComponent = () => {
    const { userInfo, error, refetch } = useUserInfoText();
    const { value, handleChange, handleSubmit, isValid, hasError } = useNumberInput('', refetch);

    const handleButtonClick = async () => {
        console.log('handleButtonClick');
        const result = await handleSubmit();
        if (result) {
            refetch(); // ユーザー情報を再取得
            console.log('カウントが更新されました');
        } else {
            console.log('エラーが発生しました');
        }
    };

    return (
        <div className="flex flex-col items-center space-y-4">
            {userInfo && (
                <div className="text-gray-800 dark:text-gray-200 text-center">
                    <p>名前: {userInfo.name}</p>
                    <p>カウント: {userInfo.count}</p>
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