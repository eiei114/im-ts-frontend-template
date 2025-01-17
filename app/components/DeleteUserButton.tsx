import { Button } from "./ui/button";
import { useDeleteUserButton } from "../hooks/useDeleteUserButton";

const DeleteUserButton = () => {
	const { isLoading, error, handleDelete } = useDeleteUserButton();

	return (
		<div className="flex flex-col space-y-2">
			<Button onClick={handleDelete} disabled={isLoading}>
				ユーザーを削除
			</Button>
			{error && <div className="text-red-500">{error}</div>}
		</div>
	);
};

export default DeleteUserButton;
