import type { MetaFunction } from '@remix-run/node';
import { Button } from 'baseui/button';
import { Input } from 'baseui/input';
import { useState } from 'react';

// ここでは、ページのメタデータを定義している。
// ページのメタデータは、ページのタイトルやディスクリプションなどの情報を定義する。
export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  const [value, setValue] = useState('');
  return (
    <div className="flex h-screen justify-center p-20">
      <div className="flex flex-col items-center gap-16 ">
          <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
            Welcome to Template App
          </h1>
          <div className="flex space-x-4">
            <Input
              placeholder="Numbers only"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              positive={value.length > 0 && /^\d+$/.test(value)}
              error={value.length > 0 && !/^\d+$/.test(value)}
            />
            <Button onClick={() => {
              // 数字じゃなかったらログ出す
              if (!/^\d+$/.test(value)) {
                console.log('数字ではありません');
              } else {
                // 数字だったら入力値を削除
                setValue('');
                // todo: バックエンドに送信
                // todo: バックエンドから結果を受け取る
                // todo: 結果を表示
              }
            }}>
              Send</Button>
          </div>
          <h1 className="leading text-2xl font-bold text-gray-800 dark:text-gray-100">
            Result: {value}
          </h1>
      </div>
    </div>
  );
}
