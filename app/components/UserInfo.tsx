import { useContext } from 'react';
import { UserInformationContext } from '~/contexts/UserInformationContext';
import { useUserInfoText } from '~/hooks/useUserInfoText';

const UserInfo = () => {
    const { count, name } = useContext(UserInformationContext);
    const { error } = useUserInfoText();

    return (
        <div className="text-gray-800 dark:text-gray-200 text-center">
            <p>名前: {name}</p>
            <p>カウント: {count}</p>
            {error && <div className="text-red-500">{error}</div>}
        </div>
    );
};

export default UserInfo;