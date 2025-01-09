import { useContext, useState } from "react";
import { UserInformationContext } from "../contexts/UserInformationContext";
import { UserSecretContext } from "../contexts/UserSecretContext";
export const useNumberInput = (initialValue = "", onSuccess?: () => void) => {
	const [value, setValue] = useState(initialValue);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const { token } = useContext(UserSecretContext);
	const { setCount } = useContext(UserInformationContext);

	const handleChange = (newValue: string) => {
		setValue(newValue);
		setError(null);
	};

	const handleSubmit = async () => {
		if (value.length === 0) {
			setError("入力値が空です");
			return null;
		}

		if (!/^\d+$/.test(value)) {
			setError("数字のみを入力してください");
			return null;
		}

		setError(null);
		setIsLoading(true);

		try {
			const response = await fetch("/user/count", {
				method: "POST",
				headers: {
					accept: "application/json",
					"Content-Type": "application/json",
					"x-token": token || "",
				},
				body: JSON.stringify({ count: Number.parseInt(value, 10) }),
			});

			if (!response.ok) {
				throw new Error("APIリクエストが失敗しました");
			}

			const data = await response.json();
			setCount(data.count);
			setValue("");
			if (onSuccess) {
				onSuccess();
			}
			return data;
		} catch (err) {
			setError(
				err instanceof Error ? err.message : "予期せぬエラーが発生しました",
			);
			return null;
		} finally {
			setIsLoading(false);
		}
	};

	const isValid = value.length > 0 && /^\d+$/.test(value);
	const hasError = value.length > 0 && !/^\d+$/.test(value);

	return {
		value,
		isLoading,
		error,
		handleChange,
		handleSubmit,
		isValid,
		hasError,
	};
};
