'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form'; // npm install react-hook-form
import Header from '../components/Header';
import Footer from '../components/Footer';

type FormData = {
  type: string;
  company: string;
  name: string;
  phone: string;
  email: string;
  message: string;
};

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const onSubmit = async (data: FormData) => {
    console.log('フォーム入力の値: ' + JSON.stringify(data)); // フォーム入力内容をログに出力

    setIsSubmitting(true);
    try {
      // Go サーバーにデータを送信
      const response = await fetch('http://localhost:8080/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('サーバーからのレスポンス:', result); // サーバー応答をログ
      setResponseMessage(result.message || '送信成功しました。');
    } catch (error) {
      console.error('送信エラー:', error); // エラーログ
      setResponseMessage('送信中にエラーが発生しました。');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white pt-20">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-[120px] font-bold text-gray-800 opacity-10">CONTACT</h1>
        
        <div className="mt-[-40px] mb-8">
          <p className="text-sm mb-2">
            株式会社TECH WORLDへのご連絡をお待ちしております。お気軽にお問い合わせください。
          </p>
          <p className="text-sm">
            ご不明な点、お困りごとなどございましたら下記フォームよりお気軽にお問い合わせください。
            原則、数営業日内に返信いたします。
          </p>
        </div>

        <p className="text-red-500 mb-8">*印の項目は必須項目です。</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* お問い合わせの種類 */}
          <div>
            <label className="block mb-2">
              お問い合わせの種類 <span className="text-red-500">*</span>
            </label>
            <select
              {...register('type', { required: 'お問い合わせの種類を選択してください。' })}
              className="w-full p-2 bg-white text-black rounded"
            >
              <option value="">選択してください</option>
              <option value="business">事業に関するお問い合わせ</option>
              <option value="recruit">採用に関するお問い合わせ</option>
              <option value="media">取材・メディア関連のお問い合わせ</option>
              <option value="other">その他のお問い合わせ</option>
            </select>
            {errors.type && (
              <p className="text-red-500 text-sm mt-1">{errors.type.message}</p>
            )}
          </div>

          {/* 貴社名 */}
          <div>
            <label className="block mb-2">貴社名</label>
            <input
              type="text"
              {...register('company')}
              className="w-full p-2 bg-white text-black rounded"
              placeholder="株式会社○○○○"
            />
          </div>

          {/* お名前 */}
          <div>
            <label className="block mb-2">
              お名前 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              {...register('name', { required: 'お名前を入力してください。' })}
              className="w-full p-2 bg-white text-black rounded"
              placeholder="山田太郎"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* 電話番号 */}
          <div>
            <label className="block mb-2">
              電話番号（半角英数） <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              {...register('phone', {
                required: '電話番号を入力してください。',
                pattern: {
                  value: /^[0-9-]+$/,
                  message: '正しい電話番号を入力してください。',
                },
              })}
              className="w-full p-2 bg-white text-black rounded"
              placeholder="00000000000"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>

          {/* メールアドレス */}
          <div>
            <label className="block mb-2">
              メールアドレス <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              {...register('email', {
                required: 'メールアドレスを入力してください。',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: '正しいメールアドレスを入力してください。',
                },
              })}
              className="w-full p-2 bg-white text-black rounded"
              placeholder="xxxxxx@xxx.jp"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* お問い合わせ内容 */}
          <div>
            <label className="block mb-2">
              お問い合わせ内容 <span className="text-red-500">*</span>
            </label>
            <textarea
              {...register('message', { required: 'お問い合わせ内容を入力してください。' })}
              className="w-full p-2 bg-white text-black rounded h-40"
              placeholder="御用件についてご記載ください"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          {/* プライバシー同意 */}
          <div className="flex items-center gap-2 my-8">
            <input type="checkbox" id="privacy" className="h-4 w-4" required />
            <label htmlFor="privacy" className="text-sm">
              個人情報の取り扱いに同意して送信する
            </label>
          </div>

          {/* 送信ボタン */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full max-w-md py-3 px-6 border border-white rounded hover:bg-white hover:text-black transition-colors"
            >
              {isSubmitting ? '送信中...' : '送信'}
            </button>
          </div>
        </form>

        {/* レスポンスメッセージ */}
        {responseMessage && (
          <p className="text-center mt-4 text-green-500">{responseMessage}</p>
        )}
      </div>
      <Footer />
    </main>
  );
}
