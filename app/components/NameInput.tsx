import { Button } from "baseui/button";
import { Input } from "baseui/input";
import { useContext } from "react";
import { UserSecretContext } from "../contexts/UserSecretContext";
import { useNameInput } from "../hooks/useNameInput";

const NameInput = () => {
	const { token } = useContext(UserSecretContext);
	const { value, isLoading, error, handleChange, handleSubmit } =
		useNameInput();

	return (
		<div className="flex flex-col space-y-4">
			<div className="flex space-x-4">
				<Input
					placeholder="Enter your name"
					value={value}
					onChange={(e) => handleChange(e.target.value)}
					error={!!error}
					disabled={isLoading}
				/>
				<Button onClick={handleSubmit} isLoading={isLoading}>
					Register
				</Button>
			</div>
			{error && <div className="text-red-500">{error}</div>}
			{token && <div className="text-green-500">トークン: {token}</div>}
		</div>
	);
};

export default NameInput;
