import type { MetaFunction } from "@remix-run/node";
import { useContext } from "react";
import DeleteUserButton from "~/components/DeleteUserButton";
import NameInput from "~/components/NameInput";
import NumberInput from "~/components/NumberInput";
import UserInfo from "~/components/UserInfo";
import { UserSecretContext } from "~/contexts/UserSecretContext";

export const meta: MetaFunction = () => {
	return [
		{ title: "New Remix App" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

export default function Index() {
	const { token } = useContext(UserSecretContext);

	return (
		<div className="flex h-screen justify-center p-20">
			<div className="flex flex-col items-center gap-16 ">
				<h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
					Welcome to Template App
				</h1>
				{!token && (
					<div className="flex space-x-4">
						<NameInput />
					</div>
				)}
				{token && (
					<>
						<UserInfo />
						<NumberInput />
						<div className="flex space-x-4">
							<DeleteUserButton />
						</div>
					</>
				)}
			</div>
		</div>
	);
}
