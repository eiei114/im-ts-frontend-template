import type { MetaFunction } from '@remix-run/node';
import NameInput from '~/components/NameInput';
import NumberInput from '~/components/NumberInput';

// ここでは、ページのメタデータを定義している。
// ページのメタデータは、ページのタイトルやディスクリプションなどの情報を定義する。
export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen justify-center p-20">
      <div className="flex flex-col items-center gap-16 ">
        <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
          Welcome to Template App
        </h1>
        <div className="flex space-x-4">
          <NameInput />
        </div>
        <div className="flex space-x-4">
          <NumberInput />
        </div>
      </div>
    </div>
  );
}
