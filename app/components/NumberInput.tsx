import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useNumberInput } from "~/hooks/useNumberInput";

const NumberInput = () => {
	const { value, handleChange, handleSubmit, isValid, hasError } =
		useNumberInput("");

	const handleButtonClick = async () => {
		const result = await handleSubmit();
		if (!result) {
			console.log("エラーが発生しました");
		}
	};

	return (
		<div className="flex space-x-4">
			<Input
				placeholder="Numbers only"
				value={value}
				onChange={(e) => handleChange(e.target.value)}
			/>
			<Button onClick={handleButtonClick}>Send</Button>
			{hasError && (
				<div className="text-red-500">数字のみを入力してください</div>
			)}
		</div>
	);
};

export default NumberInput;
